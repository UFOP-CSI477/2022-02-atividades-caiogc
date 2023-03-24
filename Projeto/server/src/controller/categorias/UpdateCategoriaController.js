import {prisma} from "../../database/client.js";

export class UpdateCategoriaController{

    async handle(request, response){
        const {id, nome} = request.body;
        
        const categoria = await prisma.categoria.update({
            where:{
                id: id
            },
    
            data:{
                nome
            }
        });

        response.json(categoria);
    }

}