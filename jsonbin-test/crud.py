import requests

bin_id= "67458cbaad19ca34f8d08d79"
XMasterKey = "$2a$10$pquz1xSlPVEwiQnQL9T5Eef9ak345Hq.XtAVYUDsqwsoSgB4rFiKO"
XAccessKey = "$2a$10$OSyxSHOdS2ckxWW.Nr05RuOSYNnrTTv/an9NIDsjNkpINr4s8QKHK"
url_root = "https://api.jsonbin.io/v3"
route = f"/b/{bin_id}"
headers = {
    "X-Master-Key": XMasterKey,
    "X-Access-Key": XAccessKey
}

r = requests.get(url_root + route, headers=headers)
print(r.json())