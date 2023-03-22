import { prisma } from '../../database/client.js'

export class UpdateDoacaoController {

    async handle(request, response) {

        const { pessoa_id, local_id } = request.body;

        const doacao = await prisma.doacao.update({

            where: {
                id: parseInt(id)
            },
            data: {
                updated_at: new Date(),
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