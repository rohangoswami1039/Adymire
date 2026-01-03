# Microservice Boilerplate

A scalable microservice architecture with Node.js, TypeScript, Apollo Federation, MongoDB, and React.

## Services

- **Gateway Service** (`services/gateway-service`): Apollo Gateway composing subgraphs.
- **User Service** (`services/user-service`): Node.js + Apollo Server (Subgraph) + Mongoose.
- **Frontend** (`frontend`): React + Vite + Apollo Client.
- **Mongo**: Database.

## Prerequisites

- Docker & Docker Compose
- Node.js (for local development without Docker)

## Getting Started

1. **Clone the repository**.
2. **Install Root Dependencies** (Optional, for scripts):
   ```bash
   npm install
   ```
3. **Run with Docker Compose** (Recommended):
   ```bash
   npm run docker:up
   # OR
   docker-compose up --build
   ```

4. **Access the Services**:
   - **Frontend**: [http://localhost:3000](http://localhost:3000) (Talks to Gateway at :4000)
   - **Gateway Playground**: [http://localhost:4000/](http://localhost:4000/)
   - **User Service Direct**: [http://localhost:4001](http://localhost:4001) (Internal)

## Local Development (No Docker)

You can run everything locally without Docker using the root script (requires Mongo running locally):
```bash
npm start
```
*Note: Ensure you have a local instance of MongoDB running at port 27017, or update `.env`.*

## Project Structure

- `env/shared.env`: Environment variables shared across services.
- `services/`: Backend microservices.
- `frontend/`: React application.

## Adding a New Service

1. Create a new directory in `services/`.
2. Copy the structure from `user-service`.
3. Update `package.json` name and port.
4. Add to `docker-compose.yml`.
5. Update `services/gateway-service/src/server.ts` to include the new subgraph in `subgraphs` list (or use Managed Federation).

## Development

- The `src` folders are mounted in Docker, so changes trigger hot-reload.
