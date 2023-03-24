import { prisma } from '../../database/client.js';

export class GetByIdCategoriaController {

    async handle(request, response) {

        const { id } = request.params;

        const estado = await prisma.categoria.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(categoria);

    }

}