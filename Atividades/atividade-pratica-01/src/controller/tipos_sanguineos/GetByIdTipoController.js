import { prisma } from '../../database/client.js';

export class GetByIdTipoController {

    async handle(request, response) {

        const { id } = request.params;

        const tiposanguineo = await prisma.tiposanguineo.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(tiposanguineo);

    }

}