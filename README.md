
# CRM de Gestión de Convocatorias y Subvenciones💻


### Equipo:
- 👨‍💻 Hector Ovalles - Product Owner [GitHub](https://github.com/devctor)
- 👩‍💻Huilen Peña - Scrum Master [GitHub](https://github.com/HuilenPe)
- 👨‍💻 Ariel Aparicio Aloma - Developer [GitHub](https://github.com/Arielparicio28)
- 👩‍💻Evangelina Rodriguez - Developer [GitHub](https://github.com/EvangeRodriguez)
- 👨‍💻 Sebastian Riggio - Developer [GitHub](https://github.com/sebastian-riggio)

# Índice

1. 👤[Cliente](#cliente)
2. ✍️[Objetivo](#objetivo)
3. 🤔[¿Qué es un CRM?](#qué-es-un-crm)
4. 🤯[Problema](#problema)
5. 📈[Elementos a Integrar](#elementos-a-integrar)
6. ⚙ [Requerimientos técnicos](#requerimientos-técnicos)
7. 📝[Forma de trabajo](#forma-de-trabajo)
8. 📅[Sprint Backlog](#sprint-backlog)
   1. [1er Sprint - 15/09/2023](#1er-sprint---15092023)
   2. [2do Sprint - 25/09/2023](#2do-sprint---25092023)
   3. [3er Sprint - 01/10/2023](#3er-sprint---01102023)
   4. [Review Stage - 05/10/2023](#review-stage---05102023)
9. 🖌[Maquetación UI/UX](#maquetación-uiux)
10. 📊[Diseño de base de datos](#diseño-de-base-de-datos)
11. 💻[Presentación de código](#presentación-de-código)
12. 🖱[Deploy](#deploy)
13. ✅[Entorno de desarrollo y testing](#entorno-de-desarrollo-y-testing)
14. 💞[Agradecimientos](#agradecimientos)

## Cliente 👤
![Logo de mi proyecto](/frontend/public/logo.png)

Fundación Somos F5: Asociación sin ánimo de lucro que construye la primera red de escuelas digitales solidarias, inclusivas y gratuitas en España dedicadas a ofrecer oportunidades a personas en situación de vulnerabilidad en el mundo de la programación y del desarrollo web.


## Objetivo ✍️

El objetivo de este proyecto es desarrollar un sistema CRM (Customer Relationship Management - Gestión de Relación con los Clientes) especializado en la gestión de convocatorias de subvenciones, tanto de entidades públicas como privadas.

## ¿Qué es un CRM?🤔
Es un software que contiene toda la información de los clientes, partners y stakeholders de una empresa y que es capaz de compartirla con todas las áreas clave de la compañía como ventas, marketing, atención al cliente o Field Service. Pero un CRM no solo permite el acceso a toda la información clave, también favorece el intercambio de datos y la colaboración entre los distintos departamentos haciendo que todos tengan acceso a la misma información y brindar así la mejor experiencia posible a los clientes.


## Descripción del Problema 🤯

Para llevar a cabo una gestión eficiente de las subvenciones, es necesario manejar cuatro bases de datos distintas que eventualmente deberán vincularse para generar análisis integrales y monitorear el ciclo de gestión de una subvención. Se requiere una herramienta, preferiblemente en línea, que permita registrar información sobre las convocatorias de subvenciones y sus calendarios, así como los detalles de cada etapa del proceso de gestión y los proyectos asociados.

Idealmente, en cualquier momento del proceso, debería ser posible generar informes en formatos como hojas de cálculo o archivos .pdf, permitiendo realizar cruces de información para crear informes personalizados y realizar análisis.

## Elementos a Integrar 📈

La herramienta debe incluir cuatro coleciones de datos interconectadas:

1. Registro de Financiadores
2. Registro de Convocatorias y Calendario
3. Registro de Proyectos
4. Gestión de Convocatorias

## Requerimientos técnicos ⚙ 

- Herramienta preferiblemente en línea que permita registrar información sobre las convocatorias de subvenciones para proyectos.
- Gestión de subvenciones: se debe administrar una base de datos con colecciones o tablas que contengan diversos datos.
- Debería ser posible generar informes que permitan extraer la información en una hoja de cálculo o en un archivo .pdf

## Forma de trabajo 📝
Para poder organizarnos utilizamos el método Kanban, dónde organizamos los Sprint, las fechas límites de cada uno. A su vez, hicimos las tareas en tarjetas para poder asignarnosla. Una vez que la tarea está resuelta es el momento de hacer testing de cada uno de ellos. Para ello, usamos como plantilla [Trello](https://trello.com/b/NVQ7iMpW/crm-gesti%C3%B3n-de-convocatorias-y-subvenciones).

![trello](/frontend/public/trello.png)

## Sprint Backlog 📅
### 1er Sprint - 15/09/2023
Permitir a los usuarios crear, acceder y administrar proyectos, incluyendo la búsqueda y seguimiento de información detallada.

### 2do Sprint - 25/09/2023
Desarrollar una página de gestión de convocatorias que permita acceso, registro, vinculación con proyectos, alertas sobre fechas clave y un cuadro de mando de calendario en la pantalla de inicio para mantener a los usuarios informados sobre próximas convocatorias.

### 3er Sprint - 01/10/2023
Habilitar la generación de informes personalizados y otorgar a los administradores acceso y control del CRM, incluyendo la gestión de usuarios y contraseñas.

### Review Stage - 05/10/2023
Mejoras de usabilidad, preparación de presentación final.

## Maquetación UI/UX 🖌
Para saber cómo vamos a querer que la experiencia de usuario y la interfaz de usuario comencemos haciendo un **MAPA DE SITIO** en Figma. Este nos ayudará al comienzo para reconocer páginas que utilizaremos y el flujo de uso de la misma. [Visualización de maquetación](https://www.figma.com/file/mf3auIs6t8YpuMn0yJHHuy/CRM---Somos-F5?type=design&node-id=10-755&mode=design&t=a5I5cElxYirv7NTI-0)

![mapa de sitio](/frontend/public/mapa-sitio.png)

Luego seguimos con **CARTA GRÁFICA**, para que nos ayude a la hora de realizar el frontend todos tengamos la misma estructura. 
![carta gráfica](/frontend/public/carta-grafica.png)

Hemos creado una maquetación del CRM para mostrar al cliente el flujo de trabajo que seguiremos y para que pueda sugerirnos posibles cambios. [Visualización del CRM](https://www.figma.com/proto/mf3auIs6t8YpuMn0yJHHuy/CMR---Somos-F5?type=design&node-id=145-1616&t=Rv3iztWi0W88XoYJ-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=33%3A142&show-proto-sidebar=1&mode=design)

![crm](/frontend/public/crm-factoria.png)

## Diseño de base de datos 📊
Al tener varios formularios de registros, hemos decidido comenzar con una relación de base de datos manual para luego decidir qué lenguaje utilizamos. Al saber que la información que se obtiene de los formularios va a ser en su mayoría de lectura y análisis, decidimos utilizar el lenguaje de NoSQL en nuestro caso, MongoDB y Mongo Atlas.

![base de datos](/frontend/public/base-dato.png)

## Presentación de código 💻
A la hora de trabajar la parte del código utilizamos **Visual Studio Code** para poder programar y creamos un repositorio en Github siendo todo el equipo colaboradores. Antes de comenzar el trabajo decidimos la forma de trabajo, lenguajes, librerías, etc. En relación a Github utilizamos git Flow y las issues para ir comunicándonos los problemas y que queden de manera organizada. Una vez que las issues están completas las fuimos cerrando para generar otras.

### En función al lenguaje de programación en FRONTEND hemos utilizado:
- Typescript
- React
- Zod
- Tailwind CSS
- Shadcn/ui [libreria de estilos y componentes](https://ui.shadcn.com/)
- Playwright [libreria de testing](https://playwright.dev/)
- Rechart

Estructuración de carpetas: 

![frontend](/frontend/public/front.png)

### En función al lenguaje de programación en BACKEND hemos utilizado:
- Nest.js
- Swagger
- MongoDB

Estructuración de carpetas: 

![backend](/frontend/public/back.png)

# Deploy 🖱
Para el deploy hemos usado [Vercel](https://vercel.com/) para el frontend y [Railway](https://railway.app/) para el backend

# Entorno de desarrollo y testing✅
## FrontEnd
Para levantar el servidor de desarrollo entraremos en la carpeta ```/forntend``` y ejecutamos el siguiente comando desde la terminal.

Instalamos las dependencias:
```bash
npm install
```
seguido de:
```bash
npm run dev
```
Y para el testing con playwright
```bash
npx playwright test
```
## Backend
Instalamos las dependencias:
```bash
npm install
```
seguido de:
```bash
npm run start:dev
```
Y para el testing
```bash
npm run test
```
# Agradecimientos 💞

Queremos expresar nuestro sincero agradecimiento a todos aquellos que hicieron posible este proyecto y nos brindaron su valioso apoyo a lo largo del camino.

Agradecemos a Factoría F5 por brindarnos la increíble oportunidad de participar en este bootcamp. La experiencia ha sido invaluable, y estamos agradecidos por la dedicación y el compromiso de todo el equipo en la formación y desarrollo de profesionales en el campo de la programación y desarrollo web. Particularmente el agradecimiento especial a los profesores Raúl García, Amr Hefny, Judith Lloveras y nos guiaron con su experiencia y conocimiento. Su dedicación y apoyo fueron fundamentales para nuestro aprendizaje y crecimiento profesional.


Queremos expresar nuestro profundo agradecimiento a nuestro cliente, Jesús Rivera. Su constante apoyo, ayuda y comprensión fueron cruciales para el éxito de este proyecto. Nos sentimos afortunados de haber trabajado con alguien tan comprometido y colaborativo.

Finalmente, agradecemos a nuestras familias por su inquebrantable apoyo y comprensión durante este mes de trabajo intenso. Vuestra paciencia y ánimo nos han inspirado a dar lo mejor de nosotros en este proyecto.

Cada uno de ustedes ha sido parte fundamental de nuestro viaje, y estamos agradecidos por la oportunidad de aprender y crecer juntos.

¡Gracias a todos!
