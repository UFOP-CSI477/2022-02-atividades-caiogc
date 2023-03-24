import { Router } from "express";
import { CreateEventoController } from "../controller/eventos/CreateEventoController.js";
import { DeleteEventoController } from "../controller/eventos/DeleteEventoController.js";
import { GetAllEventosController } from "../controller/eventos/GetAllEventosController.js";
import { GetByIdEventoController } from "../controller/eventos/GetByIdEventoController.js";
import { UpdateEventoController } from "../controller/eventos/UpdateEventoController.js";


const eventoRouter = Router();


const createEventoController = new CreateEventoController();
const getAllEventosController = new GetAllEventosController();
const getByIdEventoController = new GetByIdEventoController();
const updateEventoController = new UpdateEventoController();
const deleteEventoController = new DeleteEventoController();


eventoRouter.post('/eventos', createEventoController.handle)
eventoRouter.get('/eventos', getAllEventosController.handle);
eventoRouter.get('/eventos/:id', getByIdEventoController.handle);
eventoRouter.put('/eventos', updateEventoController.handle)
eventoRouter.delete('/eventos', deleteEventoController.handle);



// Export - Router
export { eventoRouter }