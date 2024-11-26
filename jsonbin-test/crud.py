import requests
import os
from dotenv import load_dotenv

load_dotenv()

bin_id = os.getenv("BIN_ID")
XMasterKey = os.getenv("X_MASTER_KEY")
XAccessKey = os.getenv("X_ACCESS_KEY")

url_root = "https://api.jsonbin.io/v3"
route = f"/b/{bin_id}"
headers = {
    "X-Master-Key": XMasterKey,
    "X-Access-Key": XAccessKey
}

r = requests.get(url_root + route, headers=headers)
print(r.json())