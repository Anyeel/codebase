import requests

response = requests.get("http://127.0.0.1:3000/")
print(response.text)
