import express from 'express';
import cors from 'cors';
import { mainRouter } from './routes/main.js';
import { categoriaRouter } from './routes/categorias.js';
import { eventoRouter } from './routes/eventos.js';

const PORT = 7777;

const app = express();
app.use(express.json());
app.use(cors())

// Routes:
app.use(mainRouter);
app.use(categoriaRouter);
app.use(eventoRouter)


// Server - start/listen
app.listen(PORT, () => {

    console.log(`[SERVER] Server is running on port ${PORT}`);

});