Examen Tema 1, 2 y 3

6 preguntas de desarrollo, 2 de cada tema.

# Sistema informático

- Partes del ordenador:
    - Caja
    - Placa base
    - Fuente alimentacion (importante verificar cuanto gastaremos)
    - CPU
    - GPU
    - Sistema de disipación (Ventiladores o liquida)
    - Disco duro (SSD "solido" o HDD "mecanico")
    - Memoria RAM
    - Tarjeta de sonido y tarjeta de red. (A día de hoy estan integradas en placa)
    - Unidades almacenamiento (NAS)
    - Perifericos (Pantalla, raton, teclado, impresora...)

- Administrador de dispositivos: podemos gestionar todo lo instalado en el ordenador, componentes incluso internos como condensadores, velocidad de ventiladores, adaptadores de red... Podemos ver si todo funciona correctamente, nos indica con iconos amarillos y rojos si algo no funciona bien. (Muy importante tener los drives actualizados en la gráfica, ya que son delicadas, en los demás componentes no es tan importante)

- Para que todo funcione debemos tener una arquitectura interna correcta: Central Proccess Unit (CPU), Unidad de Control (UC) y Unidad aritmético-lógica (ALU). Todo va integrado en el procesador, hoy en día tambien tenemos las graficas integradas e incluso en la nueva serie de procesadores de Apple "M" tienen la memoria RAM, son conocidos como "SOC". 

- RAM: Random access memory, se utiliza cuando necesitas almacenar ciertos procesos que requieren mayor rapidez que un disco duro. Para que un programa pueda ejecutarse en la CPU la información debe pasar por la RAM.

- Buses: Vías de comunicación mediante las cuales se comunican las diferentes partes del ordenador.

- Ciclo de instrucción: Conjunto de pasos para procesar la instrucción de un programa.

- Adaptadores: Son muy utiles si no podemos conectar ciertas cosas. Por ejemplo un adaptador de red si nuestro ordenador no tiene tarjeta de red. Ya se encuentrar en desuso.

## Redes

- Tipos:
    - PAN: red personal
    - LAN: red local
    - MAN: red en area metropolitana (ej: UGR)
    - WAN: permite conectar todo un país
    - VPN: virtual

- Hay diferentes tipos de conectarse en una red:
    - estella
    - mallas
    - anillo
    - doble anillo
    - árbol
    - híbridas

- Conectores:
    - BNC: se usaba antes para las camaras, deventaja: un cable por camara.
    - RJ-45: cable de ethernet de 8 pines, es lo más frecuente.
    - Red inalámbrica: no necesita cables, con wifi 6 y 7 ya si podemos empezar a usarla.

- Mapas físicos: Se usan para distribuir y estructurar como va la red en una zona del mundo real. ¿Donde va cada ordenador? ¿Donde pondremos el switch, el router y los cables? Podemos utilizar aplicaciones estilo autocad para llevarlos a cabo (para entornos mas profesionales).

- IP: El router te la asigna automaticamente a cada dispositivo para que puedan utilizar la red. 

## Sistemas operativos

### Arquitectura sistema operativo

- Partes:
    - Núcleo del sistema: trabaja con la CPU y la RAM.
    - API del núcleo: conunto de servicios que ofrece el OS a las aplicaciones.
    - Sistema de archivos: carpetas donde se almacenan las cosas.
    - Controladores o drivers: esenciales para que todas las partes funcionen, hoy en día se instalan solos aunque no sean las últimas versiones. ES un "DNI" para tus dispositivos.

### Funciones del OS

- Administración de procesos: decide el orden de procesamiento de los programas. 
- Administración de recursos: asigna recursos a los diferentes programas y a el mismo SO.
- Control de operaciones de entrada y salida: controla los perifericos como el raton, teclado...
- Administra la memoria RAM.
- Recuperación de errores: evitan el perder lo que no teniamos guardado cuando sucede un error.
- Gestión de usuarios y permisos: nos permite gestionar quien tiene acceso a que cosas en el oredenador.
- Control de seguridad.

### Tipos de OS

- Monotarea: solo realiza una tarea
- Multitaera: puede realizar varias tareas

- Monousuario.
- Multiusuario.

- Monoproceso: solo 1 proceso al mismo tiempo.
- Multiproceso: Ejecutar varias tareas al mismo tiempo.

- Centralizado: Todos los recursos en la misma maquina.
- Distribuido: Recursos distribuidos en varias maquinas.

- Propiertarios: ejemplo Windows
- Libres: ejemplo Linux

### Requisitos 

- Minimo de recursos para el SO, como RAM,CPU... también debemos tener en cuenta que puede venir para instalarlo en formato disco, por lo cual necesitariamos una unidad de disco.

## Tipos de aplicaciones

- Locales.
- En red.
- En la nube.

## Tipos de licencias

- Freeware: es gratuito
- Libres: puedes utilizarlo, copiarlo o distribuirlo libremente
- Propietarios: la distribuicion y modificacion esta parcial o totalmente prohibida por el dueño.
- Comerciales: desarrolladas para que la empresa gane dinero con el software
- Retail: licencia que se puede reinstalar, se podría llegar a revender o venderlo.
- Licencia por volumen: destinados a empresas que usan varios equipos.

## Gestores de arranque

- Pequeño programa que se ejecuta al iniciar la BIOS, que te permite elegir con que SO arrancar.

## Maquinas virtuales

- Programa que simula un sistema operativo dentro de tu propio SO. ejemplo: virtualbox

## Actualizaciones

- Importantes de hacer por temas de seguirdad y funcionalidades.
- Como funcionan:
    - Sobreescribir el programa
    - Desinstalar e instalar la nueva versión
- Ejemplo: Windows trae su Windows Update.

## Archivos de inicio OS

- En el inicio el sistema operativo carga ciertas cosas, la tarjeta de red, audio, interfaz gráfica... También podemos añadir programas al arranque, como por ejemplo Photoshop, que ya estaría abierto cuando abramos el sistema.

## Registro del sistema

- Sirve para llevar un registro de lo que pasa en el ordenador, usualmente para errores. Es muy util para saber que hacer en caso de cualquier problema.

# Software

- Conjunto de instrucciones que se encargan de desarrollar una tarea en concreto.

## Aministracion de usuarios y grupos

- Requiere un usuario para usarlo, esto suele usarse para equipos que usan varias personas. 
- El primer usuario que crees será siempre administrador y este podrá configurar la apliación y el resto de usuarios.
- Tipos de permisos:
    - Read
    - Write
    - Execute
- Grupos de usuarios: Ejemplo: grupo de alumnos y grupo de profesores, cada grupo tiene un acceso a diferentes cosas.

## Seguridad en las cuentas

- Normalmente si hay varias personas que utilizan el mismo equipo los usuarios de suelen proteger con una contraseña. 
- Podrías ejecutar una funcion de administrador desde un usuario normal pero te pedirá la contraseña.

## Seguridad para contraseñas

- Minimo 8 caracteres.
- Usar caracteres inusuales como el # o el @.
- No usar cosas personales como tu nacimiento o tu nombre.
- Importante cambiar la contraseña cada cierto tiempo.

## Protocolo TCP/IP 

- Todos los sistemas tienen una IP.
- Existen 2 tipos de IP:
    - IPV4: se estan terminando.
    - IPV6: será la que utilizaremos dentro de 10 años aprox.
- ejemplo de ipv4 local: 192.168.0/1.X 
- Una vez asignada la IP local se asigna una mascara de subred 255.255.255.0 y una puerta de enlace 192.168.1/0.X
- También tenemos las DNS, la princpial es la puerta de enlace y la secundaria podriamos poner la de google por si falla la primera, como la de Google 8.8.8.8
- Tipos
    - Clase A: Importante leerselo
    - Clase B.
    - Clase C.
- Puede ser fija o dinámica
- Puedes tener una ip dinámica a traves de un CG-NAT, lo cual hace que tu ip se comparta con alguien más. Esto se hace para evitar que las IPV4 se acaben.

## Servicio de nombres de dominios (DNS)

## Archivos config RED

- Normalmente se deja en automatico. Puedes poner proxy... Suele ir igual la automatica con la manual.

## Optimización de sistemas para portátiles.

- Mayor vulnerabilidad
- Menor rendimiento y otras características
- Recomendable añadir una capa de seguridad extra.
- Pueden encriptar la información de disco duro.

# Sitema de archivos

- Incluido en el SO, almacena todo.
- Directorio: sitio donde se almacenan (carpetas)

## Tipos

- FAT32: limitado a 4gb
- NTFS: patentado por microsoft.
- ExFAT: como FAT32 sin limitación
- APFS: 
- ext2, ext3 y ext4: Linux

## Gestión de sistemas archivos mediante comandos

- Podemos usar la terminal para gestionar los datos, como ya hemos hecho, con los comandos como mkdir, cd...