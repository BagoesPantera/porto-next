const contactCode = `from render_html import render_in_browser as ren

html_content = '<form action="">
<div>
    <label>Email address</label>
    <input type="email" />
</div>
<div>
    <label>Your message</label>
    <textarea></textarea>
</div>
<div>
    <button type="submit">Submit</button>
</div>
</form>'
ren(html_content)`

export default contactCode