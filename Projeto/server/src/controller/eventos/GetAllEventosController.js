import { prisma } from "../../database/client.js";

export class GetAllEventosController {

    async handle(request, response) {

        const eventos = await prisma.evento.findMany({

            select: {
                id: true,
                nome: true,
                descricao: true,
                preco: true,
                local: true,
                categoria: {
                    select: {
                        nome: true
                    }
                }
            }

        });
        return response.json(eventos);
    
    }

}
