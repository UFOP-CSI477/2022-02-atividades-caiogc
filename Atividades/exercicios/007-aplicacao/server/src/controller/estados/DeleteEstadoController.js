import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { response } from "express";
import { prisma } from "../../database/client.js"; 

export class DeleteEstadoController {

    async handle(request, response){
        const {id} = request.body;

        try {
            console.log(request.body)
            
            const estado = await prisma.estado.delete({
                where:{
                    id: parseInt(id)
                },
        
            });
    
            response.json(estado);
        }        
         catch (error) {
            if (error.code === "P2025" && error instanceof PrismaClientKnownRequestError){
                return response.status(404).json({
                    message:`[DeleteEstadoController] Estado id: ${id} não existe.`
                })
            }
            
        }
    }
}