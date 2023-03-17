# Ejercicio Horóscopo

 Ejercicio para los distintos signos del horóscopo. Los datos se obtienen desde la API provista por el cliente.

## Instalación

1. Clonar el repositorio

2. En la raíz del proyecto ejecutar el comando 

   ```
   npm install
   ```

   Esto instala todas las dependencias del proyecto.

3. Ejecutar  

   ```
   npm start    --para ejecutar en windows
   ```
   ```
   npm run start:gnu   --para ejecutar en Linux
   ```
   Se agrego un archivo extra .env.dev.gnu para la ejecucion en linux asi como su script correspondiente en el package.json

    para correr el proyecto en windows, que estará disponible en http://localhost:3000 
     para correr el proyecto en linux, que estará disponible en http://localhost:3002

## Dockerizacion
 Se agrego la dockerizacion al proyecto, incluyendo en la app y en la API provista por el cliente archivos DockerFile con la configuracion correspondiente así como archivos de ejecucion para docker-compose.

 En el nivel superior de ambos se adiciona un archivo docker-compose.yml que  contiene la configuracion para levantar ambas aplicaciones dockerizadas como servicios .

 ## Test Case
 Se agregaron al archivo App.test.js un par de prueba unitarias solo para buscar varios elementos en la app renderizada de forma muy sencilla. 

 ### Características principales:

- Se puede cambiar la vista entre "grilla" y "lista"
- Se puede buscar por signo
- Se puede ver el listado de signos con su imagen, nombre y descripción
- El signo correspondiente a la fecha actual se muestra destacado
- Se puede ordenar alfabéticamente y por fecha, tanto de forma ascendente como descendente


## Dependencias

 env-cmd, React Bootstrap, Axios, SASS, Moment


### Autor

Ing: Ivan Miguel Portuondo Vasallo