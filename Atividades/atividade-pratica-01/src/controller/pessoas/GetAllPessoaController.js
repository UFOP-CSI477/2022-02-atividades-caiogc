import { prisma } from '../../database/client.js'

export class GetAllPessoaController {

    async handle(request, response) {

        const pessoas = await prisma.pessoa.findMany({

            include: {
                cidade: true,
                tiposanguineo: true
            }

        });
        return response.json(pessoas);

    }

}