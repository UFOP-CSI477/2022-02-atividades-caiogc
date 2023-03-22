import { prisma } from '../../database/client.js'

export class DeleteLocalController {

    async handle(request, response) {

        const { id } = request.body;

        try {
            const local = await prisma.local.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(local)

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);

        }

    }

}