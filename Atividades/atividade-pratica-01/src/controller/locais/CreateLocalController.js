import { prisma } from '../../database/client.js'

export class CreateLocalController {

    async handle(request, response) {

        const { nome, cidade_id } = request.body;

        const local = await prisma.local.create({

            data: {
                nome,
                cidade: {
                    connect: {
                        id: cidade_id
                    }
                }
            }

        });

        return response.json(local);

    }

}