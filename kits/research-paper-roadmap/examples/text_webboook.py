import requests
from pypdf import PdfReader

# 1. Extract text from the PDF
reader = PdfReader("paper2.pdf")

paper_text = ""

for page in reader.pages:
    text = page.extract_text()
    if text:
        paper_text += text + "\n"

print("Extracted characters:", len(paper_text))

url = "YOUR_LAMATIC_WEBHOOK_URL"

payload = {
    "paper_text": paper_text,
    "programming_language": "Python",
    "experience_level": "Intermediate",
    "implementation_goal": "Main method only"
}

response = requests.post(url, json=payload)

print("Status code:", response.status_code)
print("Response:", response.text)