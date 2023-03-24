import { prisma } from "../../database/client.js"; 

export class CreateCategoriaController {

    async handle(request, response) {

        const { nome } = request.body;

        // validacoes
        if ( nome === "" ) {
            return response.status(400).json({
                message: "Dados incompletos. Informe o nome da categoria"
            });
        }
        // sanitizacao

        const categoria = await prisma.categoria.create({

            data: {
                nome
            }

        });

        console.log(categoria);
        return response.json(categoria);

    }

}