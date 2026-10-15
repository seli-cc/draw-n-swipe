import { defineConfig } from 'drizzle-kit';

process.loadEnvFile();

export default defineConfig({
    dialect: 'mysql',
    schema: './src/db/schema.ts',
    out: './drizzle',
    dbCredentials: { url: process.env.DATABASE_URL! },
});
