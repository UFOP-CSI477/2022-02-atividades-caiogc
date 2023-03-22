import { prisma } from "../../database/client.js";

export class GetByIdLocalController {

    async handle(request, response) {

        const { id } = request.params;

        const local = await prisma.local.findUnique({

            where: {
                id : parseInt(id)
            },

            include: {
                cidade: true
            }
        });

        return response.json(local);

    }

}