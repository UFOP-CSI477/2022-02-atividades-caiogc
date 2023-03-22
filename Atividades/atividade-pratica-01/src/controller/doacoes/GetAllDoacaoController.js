import { prisma } from '../../database/client.js'

export class GetAllDoacaoController {

    async handle(request, response) {

        const doacoes = await prisma.doacao.findMany({

            include: {
                pessoa: true,
                local: true
            }

        });
        return response.json(doacoes);

    }

}