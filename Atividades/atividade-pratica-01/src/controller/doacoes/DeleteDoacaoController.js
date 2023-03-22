import { prisma } from '../../database/client.js'

export class DeleteDoacaoController {

    async handle(request, response) {

        const { id } = request.body;

        try {
            const doacaos = await prisma.doacaos.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(doacaos)

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);

        }

    }

}