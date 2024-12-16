import requests

# URL del endpoint
url = "http://127.0.0.1:3000/shared_data"

# Datos a enviar
data = {"dato": "valor"}

# Realizar la petición POST
response = requests.post(url, json=data)

# Mostrar la respuesta (la bandera)
print(response.text)
