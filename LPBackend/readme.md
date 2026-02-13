# Django

### Django personalizado 
- pip install django-jazzmin
- Dentro de settings antes de admin, instalar 'jazzmin'
### Pemitir a Angular que Django sea llamado desde fuera
- python manage.py runserver 0.0.0.0:8000
### Comando para crear un venv o .venv
- [python o python3] -m venv NombreVenv [venv o .venv]
- Windows:
  - .\[venv o .venv]\Scripts\activate
- Linux/IOS/Debian/...:
  - source ./[venv o .venv]/[bin o lib]/activate

### Crear un proyecto de django
- Primero comprobamos que [venv o .venv] que está activo en la terminal.
- pip: Usamos esta herramienta para instalar dependencias
  - pip install django
    - Esto nos creará La carpeta de configuración y manage.py
  - Creamos assets/static, assets/media, templates, y .env.
  - Configuración del proyecto:
    - Lo primero es instalar la librería de lectura de variables del .env:
      - pip install python-decouple
      - pip install python-dotenv (Funciona importando os)

### Comandos que se usan en un proyecto

- django-admin startproject NombreProyecto (Recordad que para ejecutar esto hay que instalar django)
    - pip install django
    - pip install python-decouple (Librería para leer variables secretas en archivos .env)

- python manage.py makemigrations
- python manage.py migrate
- python manage.py runserver
- python manage.py createsuperuser
- python manage.py startapp NombreApp
- python manage.py flush ##Borra toda la base de datos
 
---
### Comandos para migrar el proyecto de un pc a otro
Creamos un archivo requirements.txt
- pip freeze > requirements.txt
- 
### Comandos para instalar e iniciar un proyecto en un PC
Para iniciar este proyecto:
1. Creamos venv
2. Entramos en el venv
3. Nos posicionamos en la carpeta Raiz, donde está .env, requirements.txt, etc
4. escribimos:
    - pip install -r requirements.txt

--- 

### Comandos para migrar/transportar un proyecto a otro PC

Para transportar este proyecto a otro PC, crearemos un archivo requirements.txt:
1. Nos posicionamos dentro de la carpeta raiz del proyecto.
2. Introducimos el comando para crear requirements: pip freeze > requirements.txt
3. Comprimimos todos los archivos y carpetas de django. Las únicas que no comprimiremos será venv o .venv y los del
   IDLE.

### Comandos para trabajar con servicios REST API
-pip install django-cors-headers (Esto es la forma de verificar en producción el servidor y la web)
-pip install djangorestframework (Permite trabajar con django como si fuera un servicio REST API)
-pip install djangorestframework_simplejwt (Da un token el cual se usa para saber si un usuario esta logeado o no)
-pip install pillow (Esto es para subir, descargar, actualizar,etc,imágenes y archivos)
-Vamos a configuración para implementar lo instalado