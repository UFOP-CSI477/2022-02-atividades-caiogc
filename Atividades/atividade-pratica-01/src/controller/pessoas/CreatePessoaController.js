import { prisma } from '../../database/client.js'

export class CreatePessoaController {

    async handle(request, response) {

        const { nome, cidade_id, tipo_id } = request.body;

        const pessoa = await prisma.pessoa.create({

            data: {
                nome,
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