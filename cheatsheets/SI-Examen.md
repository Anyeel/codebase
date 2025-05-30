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

## Gestión de enlaces

- Los navegadores nos proporcionan la posibilidad de guardar un enlace a una página web. Por ejemplo en google chrome podemos guardarlo en la pestaña de la estrella (favoritos). Son conocidos como los marcadores.

- No guardamos la página como tal, unicamente un enlace a la misma. 

- Similar a la manera de guardar los archivos en nuestro ordenador, un acceso directo es un "enlace" a un archivo que está en otro lugar.

## Estructura de directorios.

- Tienen forma de árbol.

- En Linux los elementos clave del árbol son:
    - bin
    - boot
    - home
    - tmp
    - lib
- En Windows, se crea también su propia estructura de árbol:
    - Windows
    - Archivos de programa
    - Documents

## Busqueda de archivos.

- DOS y Windows:
    - *: sustituye cadenas de caracteres.
    - ?: sustituye un caracter.
- Linux: 
    - podemos usar el comando "find"

## Identificacion del software instalado.

- En windows podemos usar el panel de control y entrar en programas para ver que programas tenemos instalados. También podemos usar el simbolo del sistema y utilizar el comando "dir".

- En linux podemos consultarlo con las herramientas graficas del sistema o con el comando dpkg.

## Gestión de la informacion del sistema. Rendimiento.

- Evalución de la experiencia en Windows. Monitor de rendimiento.

## Montaje y desmontaje de dispositivos.

- Técnica de administración de discos que se utiliza en Linux. Resulta útil cuando queremos compartir particiones de discos con muchos usuarios.

- Para el montaje y desmontaje de una unidad debemos hacerlo desde el panel de control.

## Automatización

- Se puede automatizar la mayoria de tareas que pueden resultar tediosas, las más frecuentes son:
    - Copias de seguridad
    - Antivirus

- De esta forma, en el administrador de equipos, podemos entrar en el programador de tareas, en el que podemos "crear tarea". Mediante lineas de comandos escritas en un documento de texto, escribiremos las funciones que queremos automatizar, todo esto ira guardado en un archivo .bat . Una vez hecho esto mediante el programador de tareas podemos programar la ejecución de este archivo.

## Herramienta de gestión de discos. Particiones y volumenes.

- Desde el administrador de discos en Windows podemos realizar todas estas acciones. 

- En Linux tenemos herramientas como Gparted o partitionmanager.

- Desfragmentación de discos y como funcionan los discos internamente.

# Administración de dominios TEMA 4

2 tipos:
    - Red local: Servidor fisico tuyo que gestiona la red.
    - Web: Pagas un servicio.

## Estructura Cliente-Servidor

Peticiones-respuesta. El cliente le manda una request al servidor y este de forma remota le manda una respuesta. 

## Protocolo LDAP

Se considera como una base de datos pensada para almacenar directorios.
Se utiliza para acreditar los usuarios, busca datos, permite centralizar la cuentas de usuarios y permisos y posibilita la replicacion de una base de datos.

## Concepto de dominio. Subdominios. Requisitos para un dominio

Cuando creas una página web, el nombre de dominio se establece para que nos acordemos facilmente de donde queremos acceder, en vez de ser números. Lo gestiona LCANN. Recomendable comprar .com, .es, .org y .net mínimo. Esto se hace para difereciar de donde es el dominio, siendo com global, es de region, org de organizaciones sin animo de lucro y net se iba a usar para tecnologicas pero se acabó usando para todo.

Los subdominios sirven para crear ciertas categorias o partes dentro de una misma pagina web. EJEMPLO: ndt.com y ndt/aulavirtual.com

Para hacerlo en internet, puedes buscar un host, que te proporcione el servidor y buscar un dominio.

## Conceptos clave de active directory

 - Objeto: componentes que conforman el directorio, ej: usuarios, grupos, impresoras...
 - Directorios: repositorio es donde se guarda la información referente a usuarios, grupos, recursos...
 - Dominio: conjunto de objetos dentro del directorio. Dentro de un "bosque" puede haber varios dominios. Cada uno de ellos puede tener su propio conjunto de objetos y unidades organizativas.
 - Controlador de dominio: conjunto de objetos del directorio para un det. dominio.
 - Árboles: conjuntos de dominios que poseen una raíz común (Universidad de Granada)
 - Bosque: abarca todos los dominios dentro de su ámbito (universidades de España)
 - Unidad organizativa: contenedores de objetos que permiten organizarlos jerárquicamente en subgrupos dentro del dominio
 - Relaciones de confianza: método de comunicación entre dominios, los usuarios de un determinado dominio, pueden autenticarse en otro dominio del directorio.
    - Unidireccional
    - Bidireccional
    - Transitiva
- Delegación de control entre dominios: permite que usuarios de un dominio puedan administrar recursos en otro dominio.

## Administración de cuentas. Cuentas predeterminadas.

En Windows server:
    - Administrador
    - Invitado
    - Asistente de ayuda
Ctrl + Win + Q -> para asistente

## Contraseñas. Bloqueos de cuenta. Cuentas de usuarios y equipos.

Imprescindible, ultimamente se encuentran practicas de seguridad en las que nos piden requerimientos como un minimo de 8 caracteres, símbolos, números... También debemos de poner cierto número de intentos.

Si varios usuarios usan la misma cuenta se compromete la seguridad, pero es una practica común en el entorno empresarial. Es mejor tener una cuenta personalizada para evitar problemas de creacion de cuentas si se cambian los puestos de trabajo...

## Perfiles móviles y obligatorios

Perfil móvil -> un usuario tenga siempre acceso a su perfil, independientemente del equipo. Permite guardar sus configuraciones.
Perfil obligatiorio -> Las configuraciones son establecidas por el administrador y no pueden ser modificadas por el usuario.

## Carpetas personales

En nuestro perfil podemos crear carpetas particulares para cada usuario. Los directorios se pueden configurar con permisos, ejemplo: 2 personas del mismo departamento tienen unidad de red compartida para trabajar en conjunto.

Podemos crear papeleras de reciclaje ocultas para evitar perdidas de datos no deseadas.

## Plantillas de usuario. Variables de entorno.

Si tenemos muchos puestos del mismo usuario, en vez de crearlos cada vez podemos usar una plantilla para la creación de este usuario, que tendrá las caracteristicas que nosotros le digamos. Esto se hace con las variables de entorno y pueden modificarse a posteriori.

Directorios principales %APPDATA%, %WINDIR%. Pueden cambiarlos dependiendo del tamaño de la empresa y del control que quieran llevar sobre dichos directorios.

## Administración de grupos. Tipo. Estrategias de anidamiento. Grupos predeterminados.

Si tenemos muchos usuarios y departamentos habrá que hacer una planificación con árbol. Así facilitaremos la organización de quien tiene acceso a que cosas. Organigramas.

Grupos:
    - Grupos de distribuición. Se usan para correo electrónico
    - Grupo de seguridad. Se usan para asignar permisos en recursos de dominios

- Ámbitos
    - Universal
    - Global
    - Local

Cuando empezamos de 0 hacemos una estrategia visual dependiendo de los departamentos que haya en la empresa. Una vez definida la estrategia.

Se pueden dar acceso remotamente por si se da una situación fuera de lo común.

## Instalación win server y ubuntu server

Guía en el temario.

# Administración del acceso al dominio TEMA 5

Nos centraremos en la gestión centralizada de servidores, clientes y recursos en diferentes organizaciones. Los administradores de dominio tienen derechos administrativos completos sobre la base de datos del directorio y cada miembro del dominio.

## Equipos de Dominio

### Categorías principales:

- Equipos y recursos físicos: Hardware como ordenadores, impresoras, escáneres, monitores
- Recursos lógicos: Elementos administrados por el dominio (directorios compartidos)
- Usuarios y grupos: Personas gestionadas a través del dominio
- Servicios: Correo electrónico, acceso FTP, etc.

En un dominio, cada elemento se representa como una entidad individual con atributos asignables, formando el esquema de dominio.

## Permisos y Derechos

### Derechos

Atributos asignados a usuarios y grupos para acceder al sistema, controlan características particulares de cada acceso. Incluyen acciones básicas como inicio de sesión, copias de seguridad. En Active Directory aparecen como "Derecho de usuario"

### Permisos

Definen cómo se puede acceder a recursos específicos, dependen del usuario o grupo al que pertenezca. Establecen niveles de acceso: lectura, modificación, ejecución, eliminación. Cada usuario/grupo tiene permisos específicos para cada recurso.

## Herramientas de Administración

### Samba
- Programa de libre implementación para sistemas Linux
- Permite que equipos Linux actúen como servidores para clientes Windows
- Ofrece administración completa de servicios de archivos e impresión
- Soporta listas de control de acceso
- Gestión de usuarios mediante comando `smbpasswd`
- Incluye SWAT (Samba Web Administration Tool) para configuración gráfica

### NFS (Network File System)
- Protocolo para sistemas de archivos de red
- Estructura cliente-servidor
- Permite acceso transparente a archivos remotos
- Los archivos remotos se perciben como locales para el usuario

## Permisos de Red y Locales

### Características principales:
- Los equipos pueden compartir recursos tanto desde servidor como desde clientes
- Se pueden definir permisos localmente en estaciones de trabajo
- Permisos efectivos: Solo usuarios que cumplan requisitos del servidor Y del cliente local tendrán acceso
- Herencia de permisos: Los permisos se propagan desde elementos principales a secundarios

### Configuración de permisos efectivos:
- Grupo general: Permisos por pertenencia a grupo general
- Grupo local: Permisos por pertenencia a grupo local
- Acceso puede denegarse mediante permisos de recurso compartido

### Gestión de herencia:
- Cambios en elemento principal: Modificaciones se heredan automáticamente
- Configuración directa: Elegir "Permitir" o "Denegar" para reemplazar herencia
- Eliminar herencia: Desactivar casilla "Heredar del objeto principal"

## Delegación de Permisos

- Mecanismo para conceder permisos específicos a usuarios o grupos
- Delegación por pertenencia al grupo: Método más habitual
- Configurable a través de herramientas como GPMC (Group Policy Management Console)
- Los administradores tienen permisos previos, usuarios reciben solo los necesarios

## Listas de Control de Acceso (ACL)

### Funcionalidades:
- Asignan permisos de forma habitual
- Filtran tráfico para seguridad informática
- Mejoran rendimiento limitando tráfico específico
- Controlan acceso por áreas de empresa
- Bloquean redes sociales, permiten correo electrónico

### Permisos básicos en Linux:
- Lectura ("r")
- Escritura ("w")
- Ejecución ("x")

### Estructura en Linux:
- Owner: Propietario del archivo
- Group: Grupo del propietario
- Other: Resto de usuarios
- Usuarios específicos: Acceso individualizado
- Grupos específicos: Listado de grupos con acceso

### Requisitos para ACL en Linux:
- Soporte del kernel
- Sistema de archivos montado con atributo ACL

## Directivas de Grupo

### Características:
- Específicas de Windows Server
- Definen reglas aplicadas a cuentas de usuario y equipo
- Simplifican Active Directory
- Controlan derechos de usuarios y amplían seguridad
- Más frecuentes en redes modestas
- No requieren necesariamente Active Directory

### Plantillas:
- Permiten compendiar características para aplicación en bloque
- Facilitan la gestión al agrupar configuraciones comunes
- Se pueden crear y editar desde las herramientas de directivas de grupo

# Resolución de incidencias y asistencia técnica TEMA 6

La documentación técnica hoy en día es vital. Veremos como elaborarla.
Es recomendable tener un diario de resoluciones a problemas que hayan surgido.

## Interpretación, análisis y elaboración de documentación técnica y manuales de instalación.

En un manual debemos poner un contexto de primeras, es importante poner imagenes para que sea mas claro y rápido de aprender. 

- Guía referencia rápida: Esquema que recopila caracteristicas y funciones imprescindibles.
- Adecuación al nivel de los destinatarios: Que sea personalizado para usuarios, capaces de entenderlo dependiendo de su nivel.
- Características específicas del paquete de software. Debe estar orientado a distintas versiones, dependiendo de las actualizaciones que se hayan hecho.
  
Destacar cuando el software pueda tener partes de pago, hay que detallar esas funciones para las que hay que pagar.

- Capturas de pantalla. Importantes para tener un ejemplo visual de como debemos llevar a cabo los pasos de la guía o para gestionar errores.

También podemos incluir una guía de errores comunes, un glosario por si utilizamos terminos con los que el usuario puede no estar familiarizado. 

## Instalación y configuración de sistemas operativos y aplicaciones. Licencias de cliente y servidor.

Debemos asegurarnos de que cada usuario tenga acceso unicamente al software que necesita. Para quitar aplicaciones podemos acceder al centro de software de linux o windows. Los .exe ejecutan los asistentes de instalación. Las instalaciones se pueden personalizar en muchos casos, dependiendo de lo que necesite el usuario.

- Arranque desde disco de instalación

BIOS // UEFIBIOS, según la placa base del ordenador cambia. Podremos hacer guías ya que el acceso a la BIOS no es común para los usuarios que no estan experimentados. 

Existe la opción de la instalación desantendida, la cual tiene la personalización ya fijada, que nos permitirá facilitar el proceso de instalación tanto de sistema operativo como de otro tipo de programas.

## Instalaciones desatendidas e implementación de archivos de respuesta

Las instalaciones desatendidas automatizan la instalación de sistemas operativos o aplicaciones mediante un archivo de respuesta preconfigurado (como unattend.xml en Windows). Este archivo contiene las configuraciones necesarias, como idioma, particiones y credenciales, eliminando la necesidad de intervención manual. Es ideal para entornos donde se requiere instalar el mismo sistema en múltiples equipos.

Pasos básicos:

Crear un archivo de respuesta con las configuraciones deseadas.
Integrarlo en un medio de instalación (USB o disco).
Ejecutar la instalación, que se completará automáticamente.

La creación de una imagen de disco permite clonar un sistema operativo configurado con aplicaciones y ajustes. Esto asegura uniformidad en múltiples equipos.

Pasos para la imagen:

Configurar un equipo con el sistema operativo y software necesarios.
Usar herramientas como Clonezilla o Sysprep para capturar la imagen.
Almacenar la imagen para su despliegue en otros equipos.

## Servidores de actualizaciones automáticas

Todos los sistemas operativos tienen, lo cual nos permite mantener actualizado el sistema a la última version. Se podrán programar las actualizaciones para que se hagan automaticamente. Un ejemplo de este software sería Windows Server Update Services.

## Partes de incidencias y protocolos de actuación

Cada vez es más común que se creen tickets para las actuaciones que se realizan en el ambito laboral, para llevar un control claro de lo que se hace. Minimizar el impacto de la incidencia en ela actividad laboral, también previene futuras incidencias.

- Incidencias conocidas: un fallo común que esta pasando a gran escala.
- Incidencias descononocidas: nueva, no ha sucedido y hay que registrarla.

Clasificamos la incidencia
Investigamos, posibles diagnosticos y soluciones
Solucionamos la incidencia y reestablecemos el servicio
Archivamos la incidencia a futuro

Fecha y hora
Equipo en el que se ha producido
Software y hardware del equipo

- Incidencias en aplicaciones (ya en desuso)

## Administración remota

La administración remota permite gestionar equipos a distancia, facilitando tareas como la configuración, resolución de problemas, instalación de software y monitoreo del sistema. Se realiza mediante herramientas como Remote Desktop, SSH o software especializado como TeamViewer o AnyDesk.

UVNC -> Software para visualizar el escritorio de otro ordenador y trabajar con él. También hay funciones para servidores o incluso usarlo desde un movil, tablet... Normalmente se usa en Linux pero también se podría usar en windows.
