# Devflow

> Full-stack starter project with a Vite + React client and an Express/MongoDB server.


## Screenshots

### Daily Log Form
![devflow screenshot] <img width="919" height="704" alt="entries" src="https://github.com/user-attachments/assets/dad812d8-b7ee-4c1e-92ea-60093d14d01d" />


### Saved Entries View <img width="919" height="704" alt="entries" src="https://github.com/user-attachments/assets/d4f62bcc-95ec-4d9c-86f5-65a50c2eda9d" />

## Project structure

- `client/` — Vite + React frontend
- `server/` — Express backend with Mongoose models

## Prerequisites

- Node.js (16+ recommended)
- npm
- MongoDB (local or Atlas)

## Install

Install dependencies for both client and server:

```bash
cd client
npm install

# in another terminal
cd server
npm install
```

## Run

Start the client (Vite dev server):

```bash
cd client
npm run dev
```

Start the server (Express):

```bash
cd server
npm run dev   # uses nodemon for development
# or
npm start     # to run with node
```

The client runs on Vite's default port (usually `5173`) and the server runs on the port configured in `server.js` or your environment.

## Environment variables

Create a `.env` file in `server/` with at least the following variables:

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — secret for signing JWTs
- `PORT` — (optional) server port

## API

API routes are defined under `server/routes/`.

- Authentication endpoints: `server/routes/authRoutes.js`
- Entry endpoints: `server/routes/entryRoutes.js`

Check `server/controllers/` for route handlers and `server/models/` for Mongoose schemas.

## Scripts

- Client
  - `npm run dev` — start Vite dev server
  - `npm run build` — build production assets
  - `npm run preview` — preview production build

- Server
  - `npm run dev` — start server with `nodemon`
  - `npm start` — start server with `node`

## Contributing

Open an issue or submit a PR. For quick local development, run the client and server concurrently in separate terminals.

## Next steps / TODOs

- Add example `.env.example`
- Document key API endpoints with request/response examples
- Add tests and CI workflow

---
