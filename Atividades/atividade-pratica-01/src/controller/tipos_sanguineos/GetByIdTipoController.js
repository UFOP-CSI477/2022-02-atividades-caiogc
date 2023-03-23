import { prisma } from '../../database/client.js';

export class GetByIdTipoController {

    async handle(request, response) {

        const { id } = request.params;

        const tipoSanguineo = await prisma.tipoSanguineo.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(tipoSanguineo);

    }

}