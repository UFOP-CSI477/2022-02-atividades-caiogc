import { Router } from "express";
import { GetAllEventosController } from "../controller/eventos/GetAllEventosController.js";


const eventoRouter = Router();

const getAllEventosController = new GetAllEventosController();

// Get All 
eventoRouter.get('/eventos', getAllEventosController.handle);


// Export - Router
export { eventoRouter }