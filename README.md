
> FIFO é um app de para controle de partidas


# Tech

FIFO funciona com várias tecnologias supermaneiras!

  - HTML, JS, SCSS/CSS;
  - Node;
  - MySQL;

# Dependências e suas versões

  - NodeJs : 12.18.0
  - Express: ^4.17.1
  - Mysql2: ^2.2.5
  - Sequelize: ^6.3.5
  - Slugify: ^1.4.6
  - Nodemon: ^2.0.6
  - Sequelize-cli: ^6.2.0

# Comandos que fazem tudo funcionar

  - npm run dev || yarn dev                                   
    - Abre o servidor em localhost
  - npx sequelize db:create || yarn sequelize db:create       
    - Cria o banco de dados especificado no arquivo .sequelizerc
  - npx sequelize db:migrate || yarn sequelize db:migrate     
    - Executa as *migrations* pendentes
  - npx sequelize db:seed:all || yarn sequelize db:seed:all
    - Executa todas as *seeders*

# Routes 
   - Collection do insomnia pode ser encontrada na pasta assets na raiz do projeto
   
- [x] listar unidades | GET /unities
- [x] inserir usuáro/visitante | POST /users
- [x] listar jogos | GET /games/:unity_id
- [x] pegar jogo | GET /games/:unity_id/:game_id
- [x] listar espera (usuários que estão esperando a para jogar) | GET /waits/:game_id/:unity_id
- [x] entrar na fila | POST /waits/:game_id/:user_id/:unity_id
- [x] iniciar partida | POST /match/:wait_id
- [x] sair da fila/concluir  | PUT /waits/:wait_id/:status (padrão de sair/concluir = 2)
- [x] game anterio  | GET /game/:game_id \
- [x] próximo game  | GET /game/:game_id / deixar junto?


# Links
 Desenhos, assets, planejamento, etc etc:
  - [Link do Figma](https://www.figma.com/file/8M6YNdKQs2M0bML5t8ybbu/fifo_squad10?node-id=0%3A1)
  - [Miro](https://miro.com/app/board/o9J_kgimdlY=/)
  - [Whimsical](https://whimsical.com/modelagem-T2Yp71vwJymQSxP3YtAkeg)
  - [Trello](https://trello.com/b/aMBd6RuG/squad10fifohackaton-fcamara)

  
# Participantes
 Esse é o nosso time. Garanto que somos legais:
  - Alef
    - [GitHub](https://github.com/alefrocha99) 
    - [Linkedin](https://www.linkedin.com/in/alef-rocha-b12719127)
  - Allejandro
    - [GitHub](https://github.com/Allejandropg) 
    - [Linkedin](https://www.linkedin.com/in/allejandro-palhares-a44ab66b/)
  - Leonardo
    - [GitHub](https://github.com/LeonardoQuintiliano) 
    - [Linkedin](https://www.linkedin.com/in/leonardo-quintiliano-579829155/)
  - Lucas
    - [GitHub](https://github.com/LucasRelva) 
    - [Linkedin](https://www.linkedin.com/in/lucasrelva/)
  - Rute
    - [Linkedin](https://www.linkedin.com/in/maria-rute/)