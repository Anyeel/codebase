# Que se necesita para comunicarnos con un server http

- URL 
- VERBO

# Verbos HTTP

- Get: Consumir recursos
- Post: Mandar datos
- Put: Mandar datos pero modificando algo que ya existe
- Delete: Borrar un recurso

# Server HTTP

- Devuelve un JSON

# API

Interfaz de programación de aplicaciones.
Es una interfaz (no tiene porque ser gráfica), mandamos un comando y nos da una respuesta.
Comando/CLI/texto

La API se llama desde los dos:
- WEB: html, js, css
- APP: Java, python...
El usuario puede comunicarse con la API mediante la GUI.

# PETICION HTTP

En js es "fetch"
- URL ROOT -> api.jsonbin.io/v3
- ENDPOINT/RUTA -> /b//<ID>
- VERBO HTTP
- DATOS:
    - Headers (metadatos para interpretacion del servidor) -> X-MASTER-KEY & X-ACCESS-KEY
    - Body (informacion más compleja, JSON, formularios, iamgenes...)


DEBERES -> Authenticated user.