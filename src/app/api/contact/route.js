const EMAIL_RE = /^\S+@\S+\.\S+$/
const MAX_EMAIL_LENGTH = 254
const MAX_CONTENT_LENGTH = 3000

export async function POST(request) {
    let body
    try {
        body = await request.json()
    } catch {
        return Response.json({ success: false, error: 'Invalid request' }, { status: 400 })
    }

    const { email, content, website } = body ?? {}

    // Honeypot: robots fill hidden fields; silently succeed without sending.
    if (website) {
        return Response.json({ success: true })
    }

    if (typeof email !== 'string' || email.length === 0 || email.length > MAX_EMAIL_LENGTH || !EMAIL_RE.test(email)) {
        return Response.json({ success: false, error: 'Invalid email' }, { status: 400 })
    }
    if (typeof content !== 'string' || content.length === 0 || content.length > MAX_CONTENT_LENGTH) {
        return Response.json({ success: false, error: 'Invalid message' }, { status: 400 })
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID
    if (!token || !chatId) {
        return Response.json({ success: false, error: 'Server not configured' }, { status: 500 })
    }

    const params = new URLSearchParams({ chat_id: chatId, text: `<${email}>${content}` })
    const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage?${params.toString()}`)
    if (!resp.ok) {
        return Response.json({ success: false, error: 'Failed to send message' }, { status: 502 })
    }

    return Response.json({ success: true })
}