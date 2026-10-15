# draw-n-swipe

Group name: zoohzoó

Group members:

- Selina Catic (s2410238001)
- Edina Abazovic (s2410238002)

## Project Description:

draw-n-swipe is a Tinder for drawings. Users draw directly in the browser on a canvas, other users rate the drawings by swiping left (nope) or right (like). Uploading images is intentionally not supported to prevent AI-generated pictures.

## How to Access:

The project is not hosted YET. To run it locally on Windows 11, use Git Bash and make sure Node.js (LTS), Git and Docker Desktop are installed and Docker Desktop is running.

1. Clone the repository

   ```bash
   git clone https://github.com/seli-cc/draw-n-swipe.git
   cd draw-n-swipe
   ```

2. Start the database

   ```bash
   docker compose up -d
   ```

3. Start the backend

   ```bash
   cd server
   cp .env.example .env
   npm install
   npm run db:migrate
   npm run dev
   ```

   The API runs on http://localhost:3000

4. Start the frontend in a second terminal

   ```bash
   cd client
   npm install
   npm run dev
   ```

   The app runs on http://localhost:5173

Pages:

- Login: http://localhost:5173/[pfad]
- Draw: http://localhost:5173/[pfad]
- Swipe: http://localhost:5173/[pfad]

User: [E-Mail], Password: [Passwort]

## Tech Stack (Frontend, Backend, Database, etc.):

- React with TypeScript (Frontend)
- Vite (Build tool and dev server)
- Tailwind CSS (Styling)
- React Router (Client-side routing)
- Node.js with Express.js and TypeScript (Backend with REST API)
- Drizzle ORM (Database access and migrations)
- MySQL 8 in Docker (Database)
- JWT and bcrypt (Authentication)
