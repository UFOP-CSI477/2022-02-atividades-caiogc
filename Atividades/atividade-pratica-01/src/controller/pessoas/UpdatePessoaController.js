import { prisma } from '../../database/client.js'

export class UpdatePessoaController {

    async handle(request, response) {

        const { nome, cidade_id, tipo_id } = request.body;

        const pessoa = await prisma.pessoa.update({

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
                },
                tiposanguineo: {
                    connect:{
                        id: tipo_id
                    }
                }

            }

        });

        return response.json(pessoa);

    }

}