import { prisma } from '../../database/client.js'

export class GetAllLocalController {

    async handle(request, response) {

        const locais = await prisma.local.findMany({

            include: {
                cidade: true
            }

        });
        return response.json(locais);

    }

}