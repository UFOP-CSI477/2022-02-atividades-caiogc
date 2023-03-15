import { Router } from "express";
import { GetAllCategoriasController } from "../controller/categorias/GetAllCategoriasController.js";


const categoriaRouter = Router();

const getAllCategoriasController = new GetAllCategoriasController();

// Get All 
categoriaRouter.get('/categorias', getAllCategoriasController.handle);


// Export - Router
export { categoriaRouter }