const contactCode = `from flask import Flask, render_template, request

import requests

app = Flask(__name__)

TELEGRAM_API = "https://api.telegram.org/bot7130211581:AAFTP6o4NQ98hvoEx8MPRxJ4cLklHSHMms"
CHAT_ID = "5248458263"


@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        email = request.form["email"]
        content = request.form["message"]
        requests.get(
            f"{TELEGRAM_API}/sendMessage",
            params={"chat_id": CHAT_ID, "text": f"<{email}>{content}"},
        )
    return render_template(
        "contact.html",
        form={"""
        <form action="" method="post">
            <label>Email address</label>
            <input type="email" name="email" placeholder="your.name@company.com" />
            <label>Your message</label>
            <textarea name="content" rows="4"></textarea>
            <button type="submit">Submit</button>
        </form>
        """},
    )`
export default contactCode;