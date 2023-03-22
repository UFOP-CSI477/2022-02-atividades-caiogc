import { prisma } from "../../database/client.js";

export class GetAllTipoController {

    async handle(request, response) {

        const tipos_sanguineos = await prisma.tiposanguineo.findMany();
        return response.json(tipos_sanguineos);
    
    }

}