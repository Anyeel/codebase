import requests
import os
import dotenv
import io
from PIL import Image
dotenv.load_dotenv()

KEY = os.getenv("KEY")
API_URL = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev"
headers = {"Authorization": f"Bearer {KEY}"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.content
image_bytes = query({
	"inputs": "berserk",
})

image = Image.open(io.BytesIO(image_bytes))
image.save("berserk.png")