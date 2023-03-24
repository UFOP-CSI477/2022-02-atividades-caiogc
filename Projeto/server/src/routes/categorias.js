import { Router } from "express";
import { CreateCategoriaController } from "../controller/categorias/CreateCategoriaController.js";
import { DeleteCategoriaController } from "../controller/categorias/DeleteCategoriaController.js";
import { GetAllCategoriaController } from "../controller/categorias/GetAllCategoriaController.js";
import { GetByIdCategoriaController } from "../controller/categorias/GetByIdCategoriaController.js";
import { UpdateCategoriaController } from "../controller/categorias/UpdateCategoriaController.js";


const categoriaRouter = Router();


const createCategoriaController = new CreateCategoriaController();
const getAllCategoriaController = new GetAllCategoriaController();
const getByIdCategoriaController = new GetByIdCategoriaController();
const updateCategoriaController = new UpdateCategoriaController();
const deleteCategoriaController = new DeleteCategoriaController();


categoriaRouter.post('/categorias', createCategoriaController.handle);
categoriaRouter.get('/categorias', getAllCategoriaController.handle);
categoriaRouter.get('/categorias/:id', getByIdCategoriaController.handle);
categoriaRouter.put('/categorias', updateCategoriaController.handle);
categoriaRouter.delete('/categorias', deleteCategoriaController.handle);


// Export - Router
export { categoriaRouter }