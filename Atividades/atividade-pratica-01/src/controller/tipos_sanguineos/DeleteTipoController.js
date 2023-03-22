import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import { prisma } from "../../database/client.js";

export class DeleteTipoController {

    async handle(request, response) {

        const { id } = request.body;

        try {
            console.log(request.body);

            const tiposanguineo = await prisma.tiposanguineo.delete({
                where: {
                    id: parseInt(id)
                }
            });

            response.json(tiposanguineo);
        }catch(error) {

            if ( error.code === "P2025" &&
            error instanceof PrismaClientKnownRequestError ) {
                return response.status(400).json({
                    message: `[DeleteEstadoController] Estado id: ${id} não existe.`
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