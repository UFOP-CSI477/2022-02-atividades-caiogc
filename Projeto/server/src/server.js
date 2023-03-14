import express from 'express';
import cors from 'cors';


import { mainRouter } from './routes/main.js';

const PORT = 7777;

const app = express();
app.use(express.json());
app.use(cors())

// Routes:
app.use(mainRouter);

// Server - start/listen
app.listen(PORT, () => {

    console.log(`[SERVER] Server is running on port ${PORT}`);

});