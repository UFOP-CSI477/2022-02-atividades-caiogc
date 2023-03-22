import { prisma } from '../../database/client.js'

export class GetAllLocalController {

    async handle(request, response) {

        const locais = await prisma.local.findMany({

            include: {
                estado: true
            }

        });
        return response.json(locais);

    }

}