# Integrar un socket

Un socket nos permite comunicar entre dos procesos o aplicaciones.

# Instalar libreria

```bash
npm i socket.io
```

# Importarlas en el proyecto

```javascript
const http = require("http");
const { Server } = require("socket.io");
```

## Crear nuestro servidor socket

```javascript
const server = http.createServer(app);
const io = new Server(server);
```

## Creamos un endpoint

```javascript
io.on("connection", (socket) => {
    console.log("Usuario conectado");
    socket.on("disconnect", () => {
        console.log("Usuario desconectado");
    });
});
```