import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json({ limit: '2mb' })); // Limit anpassen, falls Bilder im JSON mitgeschickt werden

app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
});