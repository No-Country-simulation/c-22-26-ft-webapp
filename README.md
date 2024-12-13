# TimePlanify

Aplicación web de organización de equipos y sus actividades, con conversión automática de zonas horarias y gestión de horarios disponibles

## Stack
- Frontend: [Astro 5.0.5](https://astro.build/) + [Pico CSS](https://picocss.com/)
- Backend: [Django 5.1.3](https://www.djangoproject.com/)
- Base de Datos: [PostgreSQL](https://www.postgresql.org/)

## Instalación

Clona el repositorio y luego instala las dependencias del proyecto (backend y frontend):

### Backend

1. Navega a la carpeta del proyecto:
```bash
cd c-22-26-ft-webapp
```
2. Crea un entorno virtual de Python:
```bash
python -m venv .venv
```
3. Habilita el entorno virtual:
```bash
source .venv/bin/activate
# para desactivar el entorno virtual utiliza el comando "deactivate"
```
4. Instala las dependencias del backend:
```bash
pip install -r requirements.txt
```
5. (Opcional) Crea un superusuario:
```bash
python manage.py createsuperuser
# La terminal te va a pedir las credenciales
# Email:
# Password:
```

### Frontend

1. Navega a la carpeta del frontend del proyecto:
```bash
#  dentro de c-22-26-ft-webapp\
cd frontend
```
2. Instala las dependencias de Node.js:
```bash
npm install
```

### Variables de entorno

Tanto el backend como el frontend utilizan variables de entorno para conectarse entre ellos y con la base de datos. Haz una copia de `.env.dist`, cambiale el nombre a `.env` y reemplaza los valores de ejemplo con los tuyos.

```console
# c-22-26-ft-webapp/.env.dist
# variables de entorno backend - reemplaza estos valores
DEBUG=on
SECRET_KEY=your-secret-key
DATABASE_URL=postgres://your-user:your-password@your-host:your-port/your-db
ALLOWED_HOSTS=
ALLOWED_ORIGINS=http://localhost:3000, https://your.frontend.com
```

```console
# c-22-26-ft-webapp/frontend/.env.dist
# variables de entorno frontend - reemplaza estos valores
PUBLIC_API=http://your.api
```

## Como usar

Luego de instalar las dependencias y configurar las variables de entorno, para levantar la aplicación en modo desarrollo debes correr tanto el backend como el frontend:

### Backend

```bash
#  dentro de c-22-26-ft-webapp\
source .venv/bin/activate
python manage.py runserver
```

Para producción debes utilizar [WSGI](https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/).

### Frontend
```bash
#  dentro de c-22-26-ft-webapp\
cd frontend
npm run dev
```
Para producción Astro tiene multiples opciones dependiendo de la plataforma, revisa [aquí](https://docs.astro.build/en/guides/deploy/) como hacer el deploy.

## Como contribuir
1. Asígnate una tarea de la columna "Ready" en el [tablero del proyecto](https://github.com/orgs/No-Country-simulation/projects/182) y muévela a la columna "In progress"
2. Crea una rama con el formato: `<username>-<tipo>-<issue>`
    - `<username>`: Nombre de usuario en GitHub
    - `<tipo>`: `feature`, `chore` o `bugfix`
    - `<tarea>`: # de la issue relacionada a la tarea
    - Ejemplo: `usuario-feature-10`
    - Comando:  `$ git checkout -b usario-feature-10`
3. Desarrolla la tarea y haz un push de tu rama (`$ git push origin usuario-feature-10`)
4. Abre un pull request y [conéctalo con tu tarea](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword). Mueve tu tarea a la columna "In review"
5. Luego de que como equipo revisemos que este todo bien, se integra tu código a la rama de desarrollo y se pasa la tarea a la columna "Done"
