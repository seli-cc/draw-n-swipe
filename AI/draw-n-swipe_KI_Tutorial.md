# draw-n-swipe Projekt-Setup

Oct 15, 2026 · @Selina @Edina

Erstellt von Edina Abazovic. Projektteam Edina Abazovic (Frontend & Design) und Selina (Backend & Datenbank). Das Dokument dient als Projekt-Setup, Lernleitfaden und Dokumentation des KI-Einsatzes.

## Überblick

draw-n-swipe ist eine Art Tinder für Zeichnungen. Zeichnungen entstehen direkt im Browser auf einem Canvas, andere User bewerten sie per Swipe nach links (nope) oder rechts (like). Uploads sind bewusst nicht vorgesehen um KI-generierte Bilder zu vermeiden.

| Bereich | Technologie | Verantwortlich |
| --- | --- | --- |
| Frontend | React, TypeScript, Vite, Tailwind CSS | Edina |
| Design | Tailwind CSS | Edina |
| Backend | Node.js, Express.js, TypeScript | Selina |
| Datenbank | MySQL 8 via Docker Compose | Selina |
| ORM | Drizzle ORM | Selina |
| Auth | JWT, Passwörter mit bcrypt gehasht | Selina (API), Edina (Login-UI) |

Das Projekt kommt mit so wenigen Abhängigkeiten wie möglich aus. Zeichnen läuft über das native Canvas API, Swipen über Pointer Events. Eine Library kommt erst dazu, wenn die eigene Lösung verstanden ist und nicht mehr ausreicht.

## Evaluierung des Stacks

Für ein Übungsprojekt mit Fokus auf React ist der Stack sinnvoll. Vite und Tailwind halten das Drumherum klein, die Features Canvas, Swipe und Login decken die wichtigsten React-Konzepte ab. Die Schwächen liegen im Lernaufwand und in Sicherheitsvereinfachungen, die für ein Produktivsystem nicht ausreichen würden.

| Technologie | Stärken | Schwächen |
| --- | --- | --- |
| React | Große Community, gefragt am Arbeitsmarkt, Canvas und Swipe trainieren `useRef`, `useState`, `useEffect` und Custom Hooks | Viele Wege für dasselbe Problem, ohne klare Regeln wird Code schnell unübersichtlich |
| Vite | Startet in Sekunden, kaum Konfiguration, Proxy löst CORS lokal | Keine nennenswerten |
| TypeScript | Fängt Fehler früh, Props und API-Antworten sind dokumentiert | Anfangs langsamer, Typfehler können vom eigentlichen React-Lernen ablenken |
| Tailwind CSS | Schnelles Styling direkt im JSX | Lange Klassenketten, klassisches CSS wird weniger geübt |
| Express | Minimal und leicht verständlich, Express 5 behandelt async Fehler | Keine Struktur vorgegeben, ESM mit TypeScript braucht `.js` Endungen in Imports |
| Drizzle | Typsicher und SQL-nah, SQL-Wissen wird mitgelernt, kein Codegen | Kleinere Community und weniger Tutorials als Prisma |
| MySQL und Docker | Identische DB auf beiden Rechnern, ein Befehl zum Starten | Docker Desktop muss laufen, für eine kleine DB etwas schwergewichtig |
| JWT in localStorage | Einfach zu verstehen und umzusetzen | Anfällig bei XSS, in Produktion wären httpOnly Cookies sicherer |

Entscheidungen zugunsten des Lerneffekts

- Keine Libraries, die React-Grundlagen verstecken. Also kein React Query, kein Redux, keine Swipe- oder Canvas-Library. Der Login-Zustand läuft über Context, Daten werden über `useEffect` und eigene Hooks geladen.
- Kein Next.js, weil es Routing und Datenladen übernimmt und genau diese Teile gelernt werden sollen.
- Sitzen die Grundlagen, kann React Query oder `motion` nachträglich eingebaut werden. Der direkte Vergleich mit der eigenen Lösung zeigt, welches Problem die Library löst.

## Lernziele

Am Projektende soll jede Person ihren Teil ohne Hilfe erklären und die Grundlagen des anderen Teils nachvollziehen können.

**Edina (Frontend & Design)**

- [ ] JSX, Komponenten und Props erklären und anwenden
- [ ] `useState`, `useEffect`, `useRef` und `useContext` unterscheiden und gezielt einsetzen
- [ ] Einen eigenen Custom Hook schreiben
- [ ] Erklären, wann und warum React neu rendert
- [ ] Daten mit `fetch` laden, Lade- und Fehlerzustände anzeigen
- [ ] Client-Routing mit React Router aufbauen und geschützte Routen umsetzen
- [ ] Canvas API und Pointer Events ohne Library verwenden
- [ ] Ein responsives Layout mit Tailwind bauen

**Selina (Backend & Datenbank)**

- [ ] Eine REST-API mit Express aufbauen (Routen, Middleware, Statuscodes)
- [ ] Request-Daten mit Zod validieren
- [ ] Ein relationales Schema mit Fremdschlüsseln und Indizes entwerfen
- [ ] Migrations mit Drizzle erzeugen und ausführen
- [ ] Queries mit Drizzle schreiben und das erzeugte SQL verstehen
- [ ] Passwort-Hashing und JWT-Authentifizierung erklären und umsetzen
- [ ] Docker Compose für die lokale Datenbank nutzen

**Beide**

- [ ] Ein Datenmodell und eine API gemeinsam entwerfen
- [ ] Den Weg eines Swipes vom Klick bis zur Datenbank erklären
- [ ] Im Network-Tab des Browsers einen Request lesen (Header, Body, Statuscode)
- [ ] KI als Lernwerkzeug einsetzen, ohne dass sie das Denken übernimmt

## Lernen mit KI

Im Projekt ist KI Tutor und nicht Entwickler. Sie erklärt Konzepte und Fehlermeldungen und gibt Hinweise. Feature-Code wird selbst geschrieben.

| Erlaubt | Nicht erlaubt |
| --- | --- |
| Konzepte erklären lassen ("Was macht `useEffect` mit leerem Array?") | Fertige Komponenten oder Routen generieren lassen |
| Fehlermeldungen erklären lassen | Fehlermeldung einfügen und den korrigierten Code übernehmen |
| Hinweise in die richtige Richtung ("Welche Events brauche ich zum Zeichnen?") | Code übernehmen, der nicht Zeile für Zeile erklärt werden kann |
| Eigenen Code von der KI einschätzen lassen ("Was könnte hier besser sein und warum?") | KI-Einsatz ohne Eintrag in der KI-Dokumentation |
| Verständnisfragen zu einem Thema generieren lassen |  |

Konfiguration und Setup sind die Ausnahme. Diese Teile dürfen übernommen werden, müssen aber trotzdem verstanden sein.

**Ablauf bei einem Problem**

1. Fehlermeldung vollständig lesen und Datei, Zeile und den ersten Satz der Meldung notieren.
2. Offizielle Doku zum Thema öffnen (siehe Informationsquellen) und etwa 20 Minuten selbst versuchen.
3. Mit `console.log`, Debugger oder Network-Tab prüfen, was tatsächlich passiert, statt zu raten.
4. Erst dann die KI fragen, und zwar nach Erklärung oder Hinweis statt nach Lösung.
5. Die Lösung selbst tippen und nie kopieren.
6. KI-Aussagen gegen die offizielle Doku prüfen. KI kennt oft ältere Versionen, und Tailwind 4 wird anders eingerichtet als Tailwind 3, Express 5 verhält sich anders als Express 4.

**Beispiel-Prompts, die den Lerneffekt erhalten**

- "Erkläre mir das Konzept hinter X, ohne Code für mein Projekt zu schreiben."
- "Hier ist meine Fehlermeldung. Erkläre, was sie bedeutet und wo ich suchen sollte, aber verrate nicht die Lösung."
- "Gib mir drei Hinweise in steigender Deutlichkeit. Ich frage nach dem nächsten, wenn ich nicht weiterkomme."
- "Hier ist mein Code. Stelle mir Fragen, die mich selbst auf die Schwachstellen bringen."
- "Stelle mir fünf Verständnisfragen zu `useEffect` und bewerte meine Antworten."

Jede Zeile im eigenen Code muss der anderen Person erklärt werden können. Was nicht erklärt werden kann, wird nicht committet.

## Informationsquellen und Recherche

Erste Anlaufstelle ist immer die offizielle Doku der verwendeten Version. Sie ist aktueller und genauer als Tutorials, Blogposts oder KI-Antworten.

| Thema | Quelle | Wofür |
| --- | --- | --- |
| React | [react.dev/learn](https://react.dev/learn) | Offizielles Tutorial mit interaktiven Übungen, der Reihe nach durcharbeiten |
| React Referenz | [react.dev/reference/react](https://react.dev/reference/react) | Einzelne Hooks mit ihren Fallstricken nachschlagen |
| React und TypeScript | [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app) | Props, Events und Hooks richtig typisieren |
| TypeScript | [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) | Grundlagen von Typen, Unions, Generics |
| JavaScript | [javascript.info](https://javascript.info) | Lücken bei Promises, async/await und Array-Methoden schließen |
| Canvas | [MDN Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) | Zeichnen, Pfade, Export als Bild |
| Pointer Events | [MDN Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events) | Maus, Touch und Stift einheitlich behandeln |
| Vite | [vite.dev/guide](https://vite.dev/guide/) | Setup, Proxy, Umgebungsvariablen |
| Tailwind CSS | [tailwindcss.com/docs](https://tailwindcss.com/docs) | Klassen nachschlagen, Installation mit Vite |
| React Router | [reactrouter.com](https://reactrouter.com) | Routen, Navigation, geschützte Seiten |
| Express | [expressjs.com](https://expressjs.com) | Routing, Middleware, Fehlerbehandlung |
| Drizzle | [orm.drizzle.team/docs](https://orm.drizzle.team/docs/overview) | Schema, Migrations, Queries für MySQL |
| SQL | [SQLBolt](https://sqlbolt.com) | Interaktive SQL-Übungen, hilft beim Verstehen von Drizzle-Queries |
| Datenmodellierung | [MySQL Doku, Foreign Keys](https://dev.mysql.com/doc/refman/8.4/en/create-table-foreign-keys.html) | Beziehungen zwischen Tabellen |
| REST | [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) | Methoden und Statuscodes für den API-Entwurf |
| Zod | [zod.dev](https://zod.dev) | Validierung von Request-Daten |
| JWT | [jwt.io/introduction](https://jwt.io/introduction) | Aufbau eines Tokens, Token im Debugger ansehen |
| Docker Compose | [docs.docker.com/compose](https://docs.docker.com/compose/) | Services, Ports, Volumes |

**So wird recherchiert**

1. Auf Englisch suchen, mit Technologie und Version, zum Beispiel "drizzle mysql unique index" oder "react 19 useRef canvas".
2. In der Doku zwischen Lernteil (Learn, Guide, Tutorial) und Nachschlageteil (Reference, API) unterscheiden. Für ein neues Thema den Lernteil nutzen, für eine konkrete Frage die Referenz.
3. Datum und Version jeder Quelle prüfen. Stack Overflow Antworten von 2019 passen oft nicht mehr.
4. Bei seltsamen Fehlern in den GitHub Issues der Library suchen, dort stehen oft Workarounds.
5. Den Code der Library selbst ansehen, in `node_modules` oder auf GitHub. Das wirkt einschüchternd, ist aber oft die schnellste Antwort.
6. Gute Quellen der anderen Person weitergeben.

## Ordnerstruktur

Ein Monorepo mit zwei Ordnern. Edina verantwortet `client`, Selina verantwortet `server`, dadurch entstehen kaum Merge-Konflikte.

```
draw-n-swipe/
├── client/                  # Frontend (Edina)
│   ├── src/
│   │   ├── api/             # fetch-Funktionen zum Backend
│   │   ├── components/      # wiederverwendbare UI-Teile (Button, Card)
│   │   ├── features/
│   │   │   ├── auth/        # Login, Registrierung, Auth-Zustand
│   │   │   ├── draw/        # Zeichenfläche und Werkzeuge
│   │   │   └── swipe/       # Swipe-Karten
│   │   ├── pages/           # eine Datei pro Route
│   │   ├── types/           # gemeinsame TS-Typen
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css        # Tailwind Import
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── server/                  # Backend (Selina)
│   ├── src/
│   │   ├── db/
│   │   │   ├── schema.ts    # Drizzle Tabellen
│   │   │   └── index.ts     # DB-Verbindung
│   │   ├── middleware/      # z.B. Auth-Prüfung, Fehlerbehandlung
│   │   ├── routes/          # eine Datei pro Ressource, z.B. auth.routes.ts
│   │   ├── services/        # Logik und DB-Zugriffe
│   │   ├── app.ts           # Express-App
│   │   └── index.ts         # Server starten
│   ├── drizzle/             # generierte Migrations
│   ├── api.http             # alle Endpunkte zum Testen
│   ├── drizzle.config.ts
│   ├── .env                 # nicht committen
│   ├── .env.example
│   └── package.json
├── .vscode/                 # gemeinsame Editor-Einstellungen
├── docker-compose.yml
├── .gitignore
└── README.md
```

Code wird nach Feature gruppiert und nicht nach Dateityp. Im Backend reicht die Trennung in Route und Service, ein zusätzlicher Controller-Layer wäre für diese Größe überflüssig.

## Setup Basis

Eine Person richtet das Repo einmal ein, die andere klont es danach. Am besten passiert das gemeinsam an einem Bildschirm, damit beide jeden Schritt verstehen.

1. Node.js 22 LTS (`node -v`), Docker Desktop und Git installieren.
2. Repo anlegen.

   ```bash
   mkdir draw-n-swipe && cd draw-n-swipe
   git init
   mkdir server
   ```
3. Im Root eine `.gitignore` anlegen.

   ```
   node_modules/
   dist/
   .env
   .DS_Store
   ```
4. Im Root eine `docker-compose.yml` anlegen.

   ```yaml
   services:
     db:
       image: mysql:8.4
       restart: unless-stopped
       environment:
         MYSQL_ROOT_PASSWORD: root
         MYSQL_DATABASE: drawnswipe
         MYSQL_USER: app
         MYSQL_PASSWORD: app
       ports:
         - "3306:3306"
       volumes:
         - db_data:/var/lib/mysql
   volumes:
     db_data:
   ```
5. Datenbank mit `docker compose up -d` starten und mit `docker compose ps` prüfen.
6. Ersten Commit machen und auf GitHub oder GitLab pushen, die andere Person klont das Repo.

Läuft auf einem Rechner bereits ein lokales MySQL auf Port 3306, wird der Port auf `"3307:3306"` geändert.

**Verständnisfragen** (ohne KI beantworten, die Antworten stehen in der Docker-Compose-Doku)

- Wozu dient das Volume `db_data`, und was passiert ohne?
- Was bedeuten die beiden Zahlen in `"3306:3306"`?
- Warum steht `.env` in der `.gitignore`?

## Setup Backend (Selina)

Konfiguration und Grundgerüst sind vorgegeben, die Features entstehen als Lernaufgaben ohne fertigen Code. Jede Aufgabe nennt Ziel, Hinweise, Quellen und einen Selbstcheck.

### Grundgerüst

1. Projekt anlegen und Pakete installieren.

   ```bash
   cd server
   npm init -y
   npm i express cors drizzle-orm mysql2 bcryptjs jsonwebtoken zod
   npm i -D typescript tsx drizzle-kit @types/node @types/express @types/cors @types/jsonwebtoken
   npx tsc --init
   ```
2. In der `package.json` ESM aktivieren und die Scripts setzen.

   ```json
   "type": "module",
   "scripts": {
     "dev": "tsx watch --env-file=.env src/index.ts",
     "build": "tsc",
     "start": "node --env-file=.env dist/index.js",
     "db:generate": "drizzle-kit generate",
     "db:migrate": "drizzle-kit migrate",
     "db:studio": "drizzle-kit studio"
   }
   ```
3. Die `tsconfig.json` auf das Nötigste reduzieren.

   ```json
   {
     "compilerOptions": {
       "target": "ES2023",
       "module": "NodeNext",
       "moduleResolution": "NodeNext",
       "outDir": "dist",
       "rootDir": "src",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true
     },
     "include": ["src"]
   }
   ```

   Wegen `NodeNext` enden lokale Imports auf `.js`, auch in `.ts` Dateien, also `import { db } from './db/index.js'`.
4. Eine `.env.example` anlegen und nach `.env` kopieren.

   ```
   DATABASE_URL=mysql://app:app@localhost:3306/drawnswipe
   JWT_SECRET=bitte-aendern
   CLIENT_URL=http://localhost:5173
   PORT=3000
   ```
5. `drizzle.config.ts` anlegen.

   ```ts
   import { defineConfig } from 'drizzle-kit';
   
   process.loadEnvFile();
   
   export default defineConfig({
     dialect: 'mysql',
     schema: './src/db/schema.ts',
     out: './drizzle',
     dbCredentials: { url: process.env.DATABASE_URL! },
   });
   ```
6. `src/db/index.ts` anlegen.

   ```ts
   import { drizzle } from 'drizzle-orm/mysql2';
   
   export const db = drizzle(process.env.DATABASE_URL!);
   ```
7. `src/app.ts` als Startpunkt anlegen, die Routen kommen in den Lernaufgaben dazu.

   ```ts
   import express from 'express';
   import cors from 'cors';
   
   export const app = express();
   
   app.use(cors({ origin: process.env.CLIENT_URL }));
   app.use(express.json({ limit: '2mb' })); // Limit anpassen, falls Bilder im JSON mitgeschickt werden
   
   app.get('/api/health', (_req, res) => {
     res.json({ status: 'ok' });
   });
   ```
8. `src/index.ts` anlegen.

   ```ts
   import { app } from './app.js';
   
   const port = Number(process.env.PORT) || 3000;
   app.listen(port, () => console.log(`Server läuft auf http://localhost:${port}`));
   ```
9. `npm run dev` starten und http://localhost:3000/api/health im Browser öffnen.

### Lernaufgaben Backend

**B1 Schema und Migration**

- **Ziel** Das gemeinsam entworfene Datenmodell in `src/db/schema.ts` umsetzen, eine Migration erzeugen und ausführen.
- **Hinweise** `mysqlTable`, `.references()`, `uniqueIndex`. Nach `db:generate` die SQL-Datei in `drizzle/` lesen, bevor `db:migrate` läuft.
- **Quellen** Drizzle Doku zu Schema und Migrations für MySQL.
- **Selbstcheck** In `npm run db:studio` sind alle Tabellen sichtbar. Was passiert mit abhängigen Daten, wenn ein User gelöscht wird, und warum?

**B2 Fehlerbehandlung**

- **Ziel** Eine Error-Middleware, die Validierungsfehler mit 400 und alles andere mit 500 beantwortet, immer im selben Format.
- **Hinweise** Eine Express-Error-Middleware hat vier Parameter und wird als letzte Middleware registriert.
- **Quellen** Express Doku zu Error handling.
- **Selbstcheck** Warum muss sie nach den Routen stehen? Was macht Express 5 automatisch mit Fehlern aus `async` Funktionen?

**B3 Registrierung und Login**

- **Ziel** Endpunkte für Registrierung und Login nach dem eigenen API-Entwurf. Passwörter werden mit bcrypt gehasht, der Login liefert ein JWT.
- **Hinweise** Validierung und Antwort in der Route, Hashing, DB-Zugriff und Token im Service. Bei falschem Passwort und unbekannter E-Mail dieselbe Fehlermeldung zurückgeben.
- **Quellen** Zod Doku, bcryptjs README auf npm, jwt.io Introduction.
- **Selbstcheck** Warum wird das Passwort gehasht und nicht verschlüsselt? Den erzeugten Token auf jwt.io einfügen. Was steht drin, und warum darf dort kein Passwort stehen?

**B4 Geschützte Routen**

- **Ziel** Eine Middleware, die den Token aus dem `Authorization` Header prüft und die User-ID für die Route bereitstellt.
- **Hinweise** Header-Format `Bearer <token>`, `jwt.verify`, `res.locals` zum Weiterreichen.
- **Quellen** Express Doku zu Writing middleware.
- **Selbstcheck** Welcher Statuscode bei fehlendem Token, welcher bei ungültigem? Was passiert, wenn `next()` vergessen wird?

**B5 Restliche Endpunkte**

- **Ziel** Alle weiteren Endpunkte aus dem eigenen API-Entwurf umsetzen.
- **Hinweise** Schwierige Abfragen zuerst als reines SQL in Drizzle Studio oder einem SQL-Client formulieren und erst danach in Drizzle übersetzen. Doppelte Einträge lassen sich über Indizes in der Datenbank verhindern statt nur im Code.
- **Quellen** Drizzle Doku zu Select und Filters, SQLBolt Lektionen zu JOINs und Subqueries.
- **Selbstcheck** Was antwortet die API, wenn derselbe Request zweimal kommt? Ist das das gewünschte Verhalten?

**B6 API-Doku als `api.http`**

- **Ziel** Jeder Endpunkt hat einen ausführbaren Beispiel-Request in `server/api.http`.
- **Hinweise** Funktioniert in PhpStorm (HTTP Client) und VS Code (REST Client) gleich.
- **Selbstcheck** Edina kann jeden Endpunkt testen, ohne nachzufragen.

## Setup Frontend (Edina)

Konfiguration ist vorgegeben, alles mit React-Bezug entsteht als Lernaufgabe. Solange das Backend noch nicht fertig ist, wird mit Beispieldaten im Code gearbeitet, damit niemand blockiert ist.

### Grundgerüst

1. Projekt im Root erzeugen und Pakete installieren.

   ```bash
   npm create vite@latest client -- --template react-ts
   cd client
   npm i react-router
   npm i -D tailwindcss @tailwindcss/vite
   ```
2. `App.css`, `src/assets/` und den Demo-Inhalt in `App.tsx` löschen.
3. `vite.config.ts` anpassen. Der Proxy leitet `/api` an das Backend weiter und vermeidet CORS-Probleme.

   ```ts
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import tailwindcss from '@tailwindcss/vite';
   
   export default defineConfig({
     plugins: [react(), tailwindcss()],
     server: { proxy: { '/api': 'http://localhost:3000' } },
   });
   ```
4. `src/index.css` enthält nur noch den Tailwind-Import.

   ```css
   @import "tailwindcss";
   ```
5. `npm run dev` starten, die App läuft auf http://localhost:5173.

### Lernaufgaben Frontend

**F0 Grundlagen vor dem Projekt**

- **Ziel** Das offizielle Tutorial auf react.dev (Tic-Tac-Toe) und die Kapitel Describing the UI, Adding Interactivity und Managing State durcharbeiten.
- **Hinweise** Selbst tippen statt kopieren. Die Challenges am Ende jedes Kapitels lösen.
- **Selbstcheck** Den Unterschied zwischen Props und State in zwei Sätzen erklären.

**F1 Routing und Layout**

- **Ziel** Die Seiten nach eigenem Konzept anlegen, zum Beispiel Login, Zeichnen und Swipen, mit einer gemeinsamen Navigation.
- **Hinweise** `BrowserRouter`, `Routes`, `Route`, `Navigate`, `Link`. Jede Seite ist eine Komponente in `pages/`.
- **Quellen** React Router Doku, Abschnitt Declarative Routing.
- **Selbstcheck** Warum lädt die Seite bei einem Klick auf `Link` nicht neu, bei einem normalen `<a>` aber schon?

**F2 API-Wrapper**

- **Ziel** Eine einzige Funktion in `src/api/`, über die alle Requests laufen. Sie setzt JSON-Header, hängt den Token an und wirft bei Fehlern.
- **Hinweise** `fetch`, `RequestInit` und Generics für den Rückgabetyp.
- **Quellen** MDN Using the Fetch API, TypeScript Handbook zu Generics.
- **Selbstcheck** Was liefert `fetch` bei Statuscode 401, wirft es einen Fehler?

**F3 Login und Auth-Zustand**

- **Ziel** Login- und Registrierungsformular, Token im `localStorage`, Login-Zustand über Context in der ganzen App verfügbar. Alle Seiten außer dem Login sind nur eingeloggt erreichbar.
- **Hinweise** Kontrollierte Inputs mit `useState`, `createContext`, ein eigener Hook wie `useAuth` und eine Komponente für geschützte Routen.
- **Quellen** react.dev zu Passing Data Deeply with Context und Reacting to Input with State.
- **Selbstcheck** Warum ist Context hier besser, als den User über Props durch alle Komponenten zu reichen? Wann wäre Context die falsche Wahl?

**F4 Zeichenfläche**

- **Ziel** Eine Komponente, auf der mit Maus, Finger oder Stift gezeichnet werden kann. Das Ergebnis wird als Bild an das Backend geschickt.
- **Hinweise** `useRef` für das Canvas-Element und für den Zustand "zeichnet gerade", der kein State sein muss, weil sich die Anzeige dadurch nicht ändert. `getContext('2d')`, `beginPath`, `moveTo`, `lineTo`, `stroke`. Events `onPointerDown`, `onPointerMove`, `onPointerUp`. Die Tailwind-Klasse `touch-none` verhindert Scrollen beim Zeichnen am Handy. Export zum Beispiel mit `toDataURL`.
- **Quellen** MDN Canvas Tutorial, MDN Pointer Events, react.dev zu Manipulating the DOM with Refs.
- **Selbstcheck** Was würde passieren, wenn "zeichnet gerade" als `useState` umgesetzt wäre? Ausprobieren und im Profiler der React DevTools vergleichen.

**F5 Werkzeuge**

- **Ziel** Farbauswahl, Stiftgröße, Radierer und Leeren. Die Werkzeugleiste ist eine eigene Komponente.
- **Hinweise** Der State liegt in der gemeinsamen Elternkomponente und wird per Props an Leiste und Zeichenfläche gegeben. Die Logik wandert in einen Custom Hook, sobald die Komponente unübersichtlich wird.
- **Quellen** react.dev zu Sharing State Between Components und Reusing Logic with Custom Hooks.
- **Selbstcheck** Welche Komponente besitzt den State Farbe, und warum genau diese?

**F6 Swipe-Karte**

- **Ziel** Eine Karte, die sich mit Finger oder Maus seitlich ziehen lässt und sich dabei leicht dreht. Über einem Schwellwert zählt das als Like oder Nope, sonst springt sie zurück.
- **Hinweise** Startposition und Verschiebung als State, `setPointerCapture`, CSS `transform` mit `translateX` und `rotate`. Animation nur beim Zurückspringen, nicht während des Ziehens. Der Schwellwert ist eine Konstante.
- **Quellen** MDN Pointer Events, MDN `transform`, Tailwind Doku zu transition.
- **Selbstcheck** Warum wird hier State und nicht `useRef` verwendet, im Gegensatz zu F4?

**F7 Zeichnungen laden und swipen**

- **Ziel** Die Swipe-Seite lädt Zeichnungen vom Backend, zeigt immer die oberste Karte und schickt jeden Swipe an das Backend. Lade-, Fehler- und Leerzustand werden angezeigt.
- **Hinweise** `useEffect` zum Laden und drei Zustände für Laden, Fehler und Daten. Die Karte sofort aus der Liste entfernen, ohne auf die Antwort zu warten.
- **Quellen** react.dev zu Synchronizing with Effects und You Might Not Need an Effect.
- **Selbstcheck** Warum läuft der Effect im Entwicklungsmodus zweimal? Was würde ohne Dependency-Array passieren?

**F8 Design und Responsive Layout**

- **Ziel** Ein einheitliches Design für die ganze App, das auch am Handy funktioniert.
- **Hinweise** `grid`, `flex`, Breakpoints wie `sm:` und `md:`. Wiederkehrende Elemente wie Button oder Card als Komponenten in `components/`.
- **Quellen** Tailwind Doku zu Responsive design.
- **Selbstcheck** Die App wurde mit den Geräteansichten der Browser DevTools und auf einem echten Handy getestet.

## Datenmodell und API gemeinsam entwerfen

Datenmodell und API werden von Edina und Selina gemeinsam entworfen, bevor die erste Zeile Feature-Code entsteht. Die API ist danach der Vertrag zwischen Frontend und Backend, Änderungen werden abgesprochen und hier nachgetragen.

**Vorgehen**

1. Die App aus Sicht eines Users durchspielen. Welche Seiten gibt es, was passiert auf jeder Seite, welche Daten werden dort gebraucht?
2. Daraus die Entitäten und ihre Beziehungen ableiten und als ER-Diagramm skizzieren, auf Papier oder mit einem Tool wie [dbdiagram.io](https://dbdiagram.io) oder [draw.io](https://www.drawio.com).
3. Pro Seite die nötigen Endpunkte festlegen, mit Methode, Pfad, Request, Response und ob Login nötig ist.
4. Den Entwurf in die Tabellen unten eintragen.

**Leitfragen**

- Welche Daten muss das System über einen User, eine Zeichnung und einen Swipe wissen?
- Wie erkennt das System, welche Zeichnungen ein User bereits gesehen hat?
- In welchem Format und wo werden die Zeichnungen gespeichert, und welche Vor- und Nachteile hat jede Variante?
- Was soll passieren, wenn ein User oder eine Zeichnung gelöscht wird?
- Welche Regeln soll die Datenbank selbst durchsetzen, statt sich auf den Code zu verlassen?
- Welche HTTP-Methode und welcher Statuscode passen zu jeder Aktion?

**Entwurf Datenmodell**

| Tabelle | Spalte | Typ | Besonderheit |
| --- | --- | --- | --- |
|  |  |  |  |

**Entwurf API**

| Methode | Pfad | Login nötig | Request | Response |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Meilensteine

Jeder Meilenstein endet mit einem kurzen gemeinsamen Termin, bei dem beide ihren Teil zeigen und erklären. Daten werden nach Absprache eingetragen.

1. **Setup steht.** Repo, Docker-DB und beide Grundgerüste laufen auf beiden Rechnern. Edina hat F0 abgeschlossen.
2. **Entwurf steht.** Datenmodell und API sind gemeinsam entworfen und in diesem Dokument eingetragen.
3. **Unabhängig lauffähig.** Selina hat B1 und B2 umgesetzt, Edina F1 und F4 mit Beispieldaten. Eine Verbindung zwischen Frontend und Backend ist noch nicht nötig.
4. **Login funktioniert durchgängig.** Selina hat B3 und B4 umgesetzt, Edina F2 und F3. Erster echter Test ist ein Account, der im Frontend angelegt wird und in Drizzle Studio auftaucht.
5. **Kernfunktion.** Selina hat B5 und B6 umgesetzt, Edina F5 bis F7. Eine Zeichnung entsteht im Browser, landet in der DB und erscheint bei der anderen Person zum Swipen.
6. **Feinschliff.** Edina setzt F8 um, gemeinsam werden Fehlerbehandlung, Leerzustände und Handy-Test erledigt.
7. **Rollentausch (optional).** Jede Person setzt ein kleines Feature im fremden Teil um. So wird der Stack von beiden Seiten verstanden.

## Coding Standards

Der einfachste Code, der funktioniert, gewinnt. Eine Abstraktion entsteht erst, wenn sie dreimal gebraucht wird.

**Allgemein**

- TypeScript `strict` ist aktiv, `any` ist verboten. Unbekannte Werte sind `unknown` und werden geprüft.
- Prettier formatiert beim Speichern. Dafür einmal im Root `npm i -D prettier` ausführen und eine `.prettierrc` mit `{ "singleQuote": true, "printWidth": 100 }` anlegen.
- Code und Bezeichner auf Englisch, UI-Texte dürfen Deutsch sein.
- Kommentare erklären das Warum, nicht das Was.
- Funktionen erledigen eine Aufgabe und passen auf einen Bildschirm. Frühe `return`s statt tiefer Verschachtelung.
- Keine Magic Numbers, also `SWIPE_THRESHOLD = 120` statt `120` im Code.
- Kein auskommentierter Code und keine `console.log`s im Commit.
- Secrets nur in `.env`, nie im Code.

**Benennung**

| Was | Stil | Beispiel |
| --- | --- | --- |
| Variablen, Funktionen | camelCase | `loadDrawings`, `isDrawing` |
| Komponenten, Typen | PascalCase | `SwipeCard`, `Drawing` |
| Konstanten | UPPER\_SNAKE\_CASE | `SWIPE_THRESHOLD` |
| Komponenten-Dateien | PascalCase.tsx | `SwipeCard.tsx` |
| Andere Dateien | camelCase.ts | `client.ts`, `auth.service.ts` |
| DB-Spalten | snake\_case | `created_at` |
| Booleans | Präfix is, has, can | `isLoggedIn` |
| Hooks | Präfix use | `useAuth` |

**Frontend**

- Nur Function Components, Props mit `type Props = {...}` direkt über der Komponente.
- Named Exports statt Default Exports, außer bei `App.tsx`.
- Logik in Custom Hooks auslagern, sobald eine Komponente mehr als Darstellung macht.
- Styling nur mit Tailwind-Klassen. Wiederholt sich eine Klassenkette, wird daraus eine Komponente statt `@apply`.
- Requests laufen nur über `src/api/`, nie direkt mit `fetch` in Komponenten.

**Backend**

- Die Route validiert den Input mit Zod, ruft den Service auf und sendet die Antwort. Sonst nichts.
- Der Service enthält Logik und DB-Zugriff und kennt weder `req` noch `res`.
- Statuscodes 200 OK, 201 erstellt, 400 ungültig, 401 nicht eingeloggt, 403 verboten, 404 nicht gefunden.
- Fehlerantworten haben immer dasselbe Format.
- Schemaänderungen nur über `db:generate` und `db:migrate`, nie händisch in der DB.

## Git

Beide arbeiten direkt auf `main`. Da Edina nur in `client` und Selina nur in `server` arbeitet und sich beide viel absprechen, sind Branches und Pull Requests nicht nötig.

1. Vor dem Arbeiten `git pull`.
2. Oft und in kleinen Schritten committen.
3. Vor dem Pushen nochmal `git pull`, dann `git push`.
4. Änderungen außerhalb des eigenen Ordners (`docker-compose.yml`, `README.md`, dieses Dokument) vorher kurz absprechen.

**Commit-Messages**

Format `[bereich] was gemacht wurde`, kurz, auf Englisch, im Imperativ.

| Bereich | Wofür | Beispiel |
| --- | --- | --- |
| `client` | Frontend | `[client] add swipe card` |
| `server` | Backend und Datenbank | `[server] add login route` |
| `setup` | Konfiguration, Docker, Dependencies | `[setup] add docker compose` |
| `docs` | README und Dokumentation | `[docs] update api draft` |

## IDE-Plugins und Debugging

Beide IDEs eignen sich. PhpStorm enthält den vollen Funktionsumfang von WebStorm, also React, TypeScript und Node.js, und bringt das meiste bereits mit. Selina arbeitet bevorzugt mit PhpStorm, Edina mit Visual Studio Code.

Inline-KI-Vorschläge wie GitHub Copilot oder JetBrains AI Assistant bleiben in diesem Projekt ausgeschaltet. Sie schreiben Code, bevor darüber nachgedacht wurde, und widersprechen der Regel KI als Tutor.

**Visual Studio Code (Edina)**

| Plugin | Wofür |
| --- | --- |
| ESLint | Zeigt Code-Probleme im Editor, die Konfiguration kommt mit dem Vite-Template |
| Prettier | Formatiert beim Speichern |
| Tailwind CSS IntelliSense | Autovervollständigung und Vorschau für Tailwind-Klassen |
| Pretty TypeScript Errors | Macht TypeScript-Fehlermeldungen lesbar |
| Error Lens | Zeigt Fehler direkt in der Zeile |
| REST Client | `.http` Dateien für API-Tests |
| Container Tools (früher Docker) | Container starten, stoppen, Logs ansehen |

Die Empfehlungen liegen in `.vscode/extensions.json`, VS Code schlägt sie beim Öffnen vor.

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "yoavbls.pretty-ts-errors",
    "usernamehw.errorlens",
    "humao.rest-client"
  ]
}
```

Formatieren beim Speichern wird in `.vscode/settings.json` aktiviert.

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

**PhpStorm (Selina)**

| Funktion | Einstellung |
| --- | --- |
| Prettier mit Format on Save | Settings → Languages & Frameworks → JavaScript → Prettier → Automatic + Run on save |
| ESLint | Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint → Automatic |
| Tailwind CSS | Aktiv, sobald Tailwind installiert ist |
| Database Tools | Datenbank-Fenster, Verbindung zu MySQL auf `localhost:3306` |
| Docker | Services-Fenster, `docker-compose.yml` direkt starten |
| HTTP Client | `.http` Dateien für API-Tests |

Optional aus dem Marketplace sind Rainbow Brackets für verschachteltes JSX und GitToolBox für Git-Infos in der Zeile. JetBrains IDEs sind mit der FH-Mailadresse über die Studierendenlizenz kostenlos.

**Debugging-Werkzeuge**

Selbst nachsehen, was passiert, ist der größte Hebel beim Lernen und ersetzt viele KI-Fragen.

| Werkzeug | Wofür |
| --- | --- |
| React Developer Tools (Browser-Erweiterung) | Komponentenbaum, Props und State live ansehen, der Profiler zeigt Re-Renders |
| Browser DevTools, Network-Tab | Jeden Request mit Header, Body, Statuscode und Antwort prüfen |
| Browser DevTools, Sources-Tab | Breakpoints setzen und Code Zeile für Zeile durchgehen |
| IDE-Debugger für Node.js | Breakpoints im Backend statt `console.log` |
| Drizzle Studio (`npm run db:studio`) | Datenbankinhalt im Browser ansehen und ändern |
| jwt.io Debugger | Inhalt eines Tokens ansehen |
| `server/api.http` | Backend unabhängig vom Frontend testen |

## Methoden für nachhaltiges Lernen

- **Gegenseitig erklären.** Bei jedem Meilenstein erklärt jede Person ihren Teil so, dass die andere ihn nachbauen könnte. Wer etwas erklären kann, hat es verstanden.
- **Nachbauen ohne Vorlage.** Nach Abschluss einer Lernaufgabe die Kernfunktion in einer leeren Datei aus dem Gedächtnis neu schreiben. Was dabei fehlt, ist noch nicht verstanden.
- **Fehler absichtlich provozieren.** Dependency-Array weglassen, `next()` vergessen, Token manipulieren. Beobachten, was passiert, und die Fehlermeldung zuordnen.
- **Selbstcheck-Fragen ohne Hilfsmittel beantworten** und erst danach in der Doku prüfen.
- **Lernziele abhaken.** Am Projektende die Checklisten im Abschnitt Lernziele ehrlich durchgehen.

## KI-Dokumentation

Die KI trägt ihren Einsatz selbst ein, weil sie den Chat am besten zusammenfassen kann. Am Ende jedes KI-Chats wird der folgende Prompt eingefügt und die zurückgegebene Zeile oben in die Tabelle kopiert. Hat die KI Zugriff auf dieses Dokument, trägt sie die Zeile direkt ein. Vor dem Eintragen kurz prüfen, ob die Zusammenfassung stimmt.

**Prompt zum Kopieren**

```
Fasse diesen Chat als Eintrag für die KI-Dokumentation des Projekts draw-n-swipe zusammen.
Gib genau eine Zeile einer Markdown-Tabelle mit diesen sechs Spalten zurück
| Datum | Person | Tool | Zweck | Art | Ergebnis und Eigenleistung |
Person ist [Name]. Tool ist dein Name und Hersteller.
Art ist eine oder mehrere von Erklärung, Hinweis, Fehleranalyse, Dokument, Boilerplate-Code, Feature-Code.
Beschreibe konkret und knapp in ganzen Sätzen, wofür die KI genutzt wurde, was übernommen, angepasst oder verworfen wurde und was selbst erarbeitet wurde.
Verwende keine Doppelpunkte und keine Gedankenstriche im Text.
Hast du Zugriff auf das Dokument draw-n-swipe Projekt-Setup, füge die Zeile direkt als oberste Zeile in die Tabelle im Abschnitt KI-Dokumentation ein.
```

**Einträge**

| Datum | Person | Tool | Zweck | Art | Ergebnis und Eigenleistung |
| --- | --- | --- | --- | --- | --- |
| 15.10.2026 | Edina | Claude (Anthropic) | Erstellung und Überarbeitung dieses Dokuments mit ORM-Empfehlung, Ordnerstruktur, Setup-Anleitung, Coding Standards, Git-Regeln, Stack-Evaluierung, Plugin-Empfehlungen, Lernzielen, Lernaufgaben und Lernleitfaden | Dokument, Boilerplate-Code | Projektidee, Stack, Rollen und alle Entscheidungen (Drizzle, Monorepo, Docker, Login, Regeln für KI-Nutzung, vereinfachter Git-Ablauf) kamen von Edina. Fertiger Feature-Code und ein vorgegebenes Datenmodell samt API wurden auf Wunsch entfernt, damit Lernaufgaben und der eigene Entwurf im Team entstehen. Die Konfiguration wird übernommen und beim Umsetzen geprüft. |
| vor 15.10.2026 | Team | KI-Chat | Recherche, welche Technologien gut mit React zusammenarbeiten, anstelle einer Websuche | Erklärung | Grundlage für die Entscheidung für Vite, TypeScript, Tailwind CSS, Express und MySQL |
