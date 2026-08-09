const contactCode = `import os


def contact() -> dict:
    return {
        "email": os.getenv("EMAIL", "bagoespantera1@gmail.com"),
        "github": "https://github.com/BagoesPantera",
        "instagram": "https://www.instagram.com/panteraqt/",
        "hackerrank": "https://www.hackerrank.com/bagoespantera",
        "leetcode": "https://leetcode.com/panteraa/",
        "codewars": "https://www.codewars.com/users/panteraa",
    }


links = contact()
print("Send a message — let's build something great together.")
`
export default contactCode;