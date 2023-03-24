import { prisma } from "../../database/client.js";

export class GetAllCategoriaController {

    async handle(request, response) {

        const categorias = await prisma.categoria.findMany();
        return response.json(categorias);
    
    }

}