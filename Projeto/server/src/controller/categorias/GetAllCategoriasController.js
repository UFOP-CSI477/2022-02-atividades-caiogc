import { prisma } from "../../database/client.js";

export class GetAllCategoriasController {

    async handle(request, response) {

        const categorias = await prisma.categoria.findMany({
            include: {
                evento: true
            }
        });
        return response.json(categorias);
    
    }

}
