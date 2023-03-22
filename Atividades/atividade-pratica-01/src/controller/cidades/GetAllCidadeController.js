import { prisma } from '../../database/client.js'

export class GetAllCidadeController {

    async handle(request, response) {

        const cidades = await prisma.cidade.findMany({

            include: {
                estado: true
            }

        });
        return response.json(cidades);

    }

}