import { prisma } from "../../database/client.js";

export class GetByIdEventoController {

    async handle(request, response) {

        const { id } = request.params;

        const evento = await prisma.evento.findUnique({

            where: {
                id : parseInt(id)
            },

            include: {
                categoria: true
            }
        });

        return response.json(evento);

    }

}