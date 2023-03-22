import { Router } from 'express';

import { CreateLocalController } from '../controller/locais/CreateLocalController.js';
import { GetAllLocalController } from '../controller/locais/GetAllLocalController.js';
import { GetByIdLocalController } from '../controller/locais/GetByIdLocalController.js';
import { UpdateLocalController } from '../controller/locais/UpdateLocalController.js';
import { DeleteLocalController } from '../controller/locais/DeleteLocalController.js';

const localRouter = Router();

// Create
const createLocalController = new CreateLocalController();
localRouter.post('/locais', createLocalController.handle);

// Get AllLocal
const getAllLocalController = new GetAllLocalController();
localRouter.get('/locais', getAllLocalController.handle);

// Get By Id
const getByIdLocalController = new GetByIdLocalController();
localRouter.get('/locais/:id', getByIdLocalController.handle);

// Update
const updateLocalController = new UpdateLocalController();
localRouter.put('/locais', updateLocalController.handle);

// Delete
const deleteLocalController = new DeleteLocalController();
localRouter.delete('/locais', deleteLocalController.handle);

export { localRouter }