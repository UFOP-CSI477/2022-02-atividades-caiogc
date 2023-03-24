import express from 'express';
import cors from 'cors';
import { mainRouter } from './routes/main.js';
import { categoriaRouter } from './routes/categorias.js';
import { eventoRouter } from './routes/eventos.js';

const PORT = 7777;

const server = express();
server.use(express.json());
server.use(cors())

// Routes:
server.use(mainRouter);
server.use(categoriaRouter);
server.use(eventoRouter)


// Server - start/listen
server.listen(PORT, () => {

    console.log(`[SERVER] Server is running on port ${PORT}`);

});