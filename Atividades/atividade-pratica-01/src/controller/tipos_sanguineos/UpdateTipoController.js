import {prisma} from "../../database/client.js";

export class UpdateTipoController{

    async handle(request, response){
        const {id, tipo, fator} = request.body;
        
        const tiposanguineo = await prisma.tiposanguineo.update({
            where:{
                id: id
            },
    
            data:{
                tipo,
                fator,
            }
        });

        response.json(tiposanguineo);
    }

}