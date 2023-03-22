import { prisma } from '../../database/client.js'

export class CreateDoacaoController {

    async handle(request, response) {

        const {pessoa_id, local_id } = request.body;

        const doacao = await prisma.doacao.create({

            data: {
                pessoa: {
                    connect: {
                        id: pessoa_id
                    }
                },
                local: {
                    connect:{
                        id: local_id
                    }
                }
            }

        });

        return response.json(doacao);

    }

}