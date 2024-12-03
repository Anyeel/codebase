import requests
import os
import dotenv
dotenv.load_dotenv()

KEY = os.getenv("KEY")
API_URL = "https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions"
headers = {"Authorization": f"Bearer {KEY}"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
	
output = query({
	"inputs": "Take your gift, i hope you like it",
})

emociones = output[0]
for emocion in emociones:
      print(f"Emotion: {emocion['label']}, Score: {emocion['score']}")


'''
print(emociones)
for emocion in emociones:
	print(emocion)

for i in range(len(emociones)):
	print(emociones[i])
'''