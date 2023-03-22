import { Router } from 'express';
import { CreateTipoController } from '../controller/tipos_sanguineos/CreateTipoController.js';
import { GetAllTipoController } from '../controller/tipos_sanguineos/GetAllTipoController.js';
import { GetByIdTipoController } from '../controller/tipos_sanguineos/GetByIdTipoController.js';
import { UpdateTipoController } from '../controller/tipos_sanguineos/UpdateTipoController.js';
import { DeleteTipoController } from '../controller/tipos_sanguineos/DeleteTipoController.js';

const tipoRouter = Router();


// Create
const createTipoController = new CreateTipoController();
tipoRouter.post('/tipos_sanguineos', createTipoController.handle);

// Get All
const getAllTipoController = new GetAllTipoController();
tipoRouter.get('/tipos_sanguineos', getAllTipoController.handle);

// Get By Id
const getByIdTipoController = new GetByIdTipoController();
tipoRouter.get('/tipos_sanguineos/:id', getByIdTipoController.handle);

// Update
const updateTipoController = new UpdateTipoController();
tipoRouter.put('/tipos_sanguineos', updateTipoController.handle);

// Delete
const deleteTipoController = new DeleteTipoController();
tipoRouter.delete('/tipos_sanguineos', deleteTipoController.handle);

export { tipoRouter }