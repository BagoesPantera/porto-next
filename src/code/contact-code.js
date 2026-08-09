const contactCode = `from flask import Flask, render_template, request

import requests
import os

app = Flask(__name__)

TELEGRAM_API = os.getenv("TELEGRAM_API")  # e.g. https://api.telegram.org/bot<YOUR_BOT_TOKEN>
CHAT_ID = os.getenv("CHAT_ID", "YOUR_CHAT_ID")


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