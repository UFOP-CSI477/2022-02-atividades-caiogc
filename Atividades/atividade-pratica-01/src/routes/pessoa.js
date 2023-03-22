import { Router } from 'express';
import { CreatePessoaController } from '../controller/pessoas/CreatePessoaController.js';
import { GetAllPessoaController } from '../controller/pessoas/GetAllPessoaController.js';
import { GetByIdPessoaController } from '../controller/pessoas/GetByIdPessoaController.js';
import { UpdatePessoaController } from '../controller/pessoas/UpdatePessoaController.js';

import { DeletePessoaController } from '../controller/pessoas/DeletePessoaController.js';

const pessoaRouter = Router();

// Create
const createPessoaController = new CreatePessoaController();
pessoaRouter.post('/pessoas', createPessoaController.handle);

// Get All
const getAllPessoaController = new GetAllPessoaController();
pessoaRouter.get('/pessoas', getAllPessoaController.handle);

// Get By Id
const getByIdPessoaController = new GetByIdPessoaController();
pessoaRouter.get('/pessoas/:id', getByIdPessoaController.handle);

// Update
const updatePessoaController = new UpdatePessoaController();
pessoaRouter.put('/pessoas', updatePessoaController.handle);

// Delete
const deletePessoaController = new DeletePessoaController();
pessoaRouter.delete('/pessoas', deletePessoaController.handle);

export { pessoaRouter }