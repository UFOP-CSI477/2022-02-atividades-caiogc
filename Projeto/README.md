# **CSI606-2022-02 - Proposta de Trabalho Final**

  

## *Aluno: Caio Guilherme Costa Carvalho

  

--------------



### Resumo

Esse trabalho tem como finalidade o desenvolvimento de um site para gestão e divulgação de eventos na cidade de João Monlevade. Uma página inicial com os eventos separados por categoria ou data e a página de cada evento com suas respectivas informações como tipo de evento, valor, data, local, etc. 

### 1. Funcionalidades implementadas	

 - página inicial com os eventos;
 - página do evento com informações sobre tipo do evento, valor, data, local, etc.;
 - compartilhar eventos nas redes sociais; 
  
### 2. Funcionalidades previstas e não implementadas
  - criar, editar e excluir um evento por não conseguir tratar problemas de tipagem das variáveis;
  - buscar/filtrar eventos por nome, tipo, ou data por não conseguir implementar a função filter no contexto da aplicação;

### 3. Outras funcionalidades implementadas
<!-- Descrever as funcionalidades implementas além daquelas que foram previstas, caso se aplique.  -->

### 4. Principais desafios e dificuldades
A principal dificuldade foi em ralação a manipulação dos dados da API na interface, principalmete o atributo do tipo date. Algumas funções não foram implementadas por esse motivo.

### 5. Instruções para instalação e execução
 1. Clone o repositório
 
 2. Acessar os diretórios "Projeto/server" e "Projeto/web-eventos" via terminal e executar
 `npm run install`
 
 3.  Criar o arquivo do banco de dados "app.sqlite" e informar o caminho no ".env" do server para acessar via Prisma
 
 4. Iniciar o servidor `npm start`

 5. Iniciar aplicação `npm run dev`

### 6. Referências
<!-- Referências podem ser incluídas, caso necessário. Utilize o padrão ABNT. -->