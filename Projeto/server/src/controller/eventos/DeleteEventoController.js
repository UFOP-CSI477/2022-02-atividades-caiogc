import { prisma } from '../../database/client.js'

export class DeleteEventoController {

    async handle(request, response) {

        const { id } = request.body;

        try {
            const evento = await prisma.evento.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(cidade)

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);

        }

    }

}