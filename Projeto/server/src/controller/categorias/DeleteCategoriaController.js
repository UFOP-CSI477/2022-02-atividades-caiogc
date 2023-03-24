import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import { prisma } from "../../database/client.js";

export class DeleteCategoriaController {

    async handle(request, response) {

        const { id } = request.body;

        try {
            console.log(request.body);

            const categoria = await prisma.categoria.delete({
                where: {
                    id: parseInt(id)
                }
            });

            response.json(categoria);
        }catch(error) {

            if ( error.code === "P2025" &&
            error instanceof PrismaClientKnownRequestError ) {
                return response.status(400).json({
                    message: `[DeleteCategoriaController] Categoria id: ${id} não existe.`
                });
            } else {
                return response.status(500).json({
                    message: error,
                    id: id
                });
            }


        }

    }

}