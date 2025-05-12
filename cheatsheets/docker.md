# Comandos

docker build -t "nombre" "ruta"     

docker run -d --name "nombre" -p 3306:3306 "nombre-imagen"

sudo docker rm -f $(sudo docker ps -a -q)

docker-compose.yml

docker compose up -d
docker compose down
docker ps -a
docker logs "id"

docker exec -it "id" mysql -u root -p "contraseña"

exit

# Funcionamiento

Código -> Imagen -> Contenedores

# Borrar imagen

docker images
docker rm -f "id" borrar contenedor -f -> forzar
docker rmi -f "id" borrar imagen