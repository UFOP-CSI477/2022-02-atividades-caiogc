import { prisma } from '../../database/client.js'


export class CreateEventoController {

    async handle(request, response) {

        const { nome, descricao, preco, data, local, img, categoria_id } = request.body;

        const evento = await prisma.evento.create({

            data: {
                nome,
                descricao,
                preco,
                data: new Date(data),
                local,
                img,
                categoria: {
                    connect: {
                        id: categoria_id
                    }
                }
            }

        });

        return response.json(evento);

    }

}