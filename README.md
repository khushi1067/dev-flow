# Devflow

> Full-stack starter project with a Vite + React client and an Express/MongoDB server.


## Screenshots

### Daily Log Form
![devflow screenshot](./screenshots/form.png)

### Saved Entries View
![Saved Entries](./screenshots/entries.png)


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
