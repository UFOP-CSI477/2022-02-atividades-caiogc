import { prisma } from '../../database/client.js'

export class UpdateLocalController {

    async handle(request, response) {

        const { nome, cidade_id } = request.body;

        const local = await prisma.local.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                updated_at: new Date(),
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