# API Oil Tenders

API en Node.js/Express que consulta y normaliza la información pública de ofertas (tenders) de petróleo de la Secretaría de Energía de Argentina, y la expone mediante endpoints REST. Actualmente, la API principal obtiene los datos desde el endpoint oficial y los devuelve en un formato de objetos fácil de consumir por clientes frontend u otros servicios.

## Características

- **Express API** con `type: module` (ESM).
- **Endpoint principal** `GET /api/v1/tenders` que:
  - Consulta `https://www.se.gob.ar/comercio_exterior_liquidos/oferta_com_ext_expo_store.php`.
  - Transforma la tabla (`aaData`) en un arreglo de objetos con claves descriptivas.
- **CORS** habilitado mediante middleware propio (`src/middlewares/cors.js`).
- **Estructura preparada** para capa de servicios, controladores, y repositorios (MongoDB deshabilitado por ahora).

## Estructura del proyecto

```
/ (raíz)
├─ package.json
├─ src/
│  ├─ app.js                  # Punto de entrada de la app Express
│  ├─ api.http                # Requests de ejemplo
│  ├─ config/
│  │  └─ config.js            # Carga de variables de entorno
│  ├─ controllers/
│  │  └─ tenders.controller.js
│  ├─ middlewares/
│  │  └─ cors.js
│  ├─ routes/
│  │  ├─ routes.js            # Monta /api/v1
│  │  └─ tenders.router.js    # Rutas de /tenders
│  ├─ services/
│  │  └─ tenders.service.js   # Lógica para consultar y transformar datos externos
│  ├─ repositories/           # Esqueleto, hoy sin uso (Mongo comentado)
│  ├─ models/                 # Esqueleto, hoy sin uso (Mongo comentado)
│  ├─ db.js                   # Conexión Mongo comentada
│  └─ utils.js
```

## Requisitos

- Node.js 18+ recomendado.
- Opcional: archivo `.env` si deseas configurar variables (ver más abajo). Para el uso actual (sin DB), basta con `PORT` si quieres cambiar el puerto por defecto.

## Instalación

```bash
npm install
```

## Ejecución

- Desarrollo (con nodemon):

```bash
npm run dev
```

- Producción:

```bash
npm start
```

Por defecto la app escucha en `http://localhost:8080`. Puedes cambiar el puerto con la variable de entorno `PORT`.

## Variables de entorno (.env)

Aunque la conexión a base de datos está deshabilitada/comentada, el proyecto ya contempla las siguientes variables (ver `src/config/config.js`):

- `PORT` (opcional): Puerto del servidor HTTP.
- `CLIENT_URL` (opcional): Origen permitido para CORS si decides utilizarlo en `cors.js`.
- Variables de MongoDB (hoy no utilizadas): `DB_NAME`, `DB_USER`, `DB_PASS`.
- Otras (oauth, mail, jwt) están definidas pero no usadas en este servicio.

Ejemplo mínimo:

```
PORT=8080
```

## Endpoints

- `GET /api/v1/tenders`
  - Obtiene las ofertas desde la fuente oficial y retorna un arreglo de objetos con esta forma:

```json
[
  {
    "id": "1962",
    "date": "15/11/2023 15:11",
    "company": "TOTAL AUSTRAL S.A.",
    "product": "ACEITES CRUDOS DE PETRÓLEO - Otros",
    "volume": "12000 M3",
    "fromDate": "01/12/2023",
    "toDate": "10/01/2024",
    "price": "(BRENT - DTO) / 0.97 * (1/(1+ DDEE)) + IVA",
    "position": "2709.00.10-900",
    "deliveryPlant": "PTO. ROSALES (OILTANKING / EBYTEM)",
    "observations": "...",
    "aditionalInfo": "...",
    "pdf": "<button ...> Descargar PDF</button>",
    "finished": "No"
  }
]
```

Nota: `pdf` proviene del HTML que entrega la fuente original (botón/link). Puedes parsearlo en tu cliente según tus necesidades.

## Ejemplos de uso

- cURL local:

```bash
curl http://localhost:8080/api/v1/tenders
```

- Archivo `src/api.http` (para VS Code/REST Client):

```http
### Obtener todas las ofertas de oil
GET http://localhost:8080/api/v1/tenders
```

## Decisiones de diseño y estado actual

- **Fuente única de datos**: Por ahora no se persiste en BD; la API actúa como proxy/normalizador.
- **Repositorio/Modelo Mongo**: Código y esquema están comentados (`src/repositories/*`, `src/models/*`, `src/db.js`). Se pueden reactivar fácilmente si se decide persistir.
- **CORS**: Middleware simple en `src/middlewares/cors.js`.

## Futuras mejoras

- Persistir ofertas en MongoDB y agregar filtros/paginación desde BD.
- Normalizar/limpiar campos HTML (por ejemplo, `pdf` y `product`).
- Endpoints adicionales: búsqueda por fecha, compañía, estado, etc.
- Tests automatizados.

## Scripts disponibles

- `npm run dev`: Levanta el servidor con `nodemon`.
- `npm start`: Levanta el servidor con Node.

## Licencia

Este proyecto está licenciado bajo la licencia ISC (ver `package.json`).
