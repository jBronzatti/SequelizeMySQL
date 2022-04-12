// Se conecta ao banco já existente new Sequelize('Nome do Banco', 'Nome do usuário', 'Senha do Banco)
const Sequelize = require("sequelize");
const sequelize = new Sequelize('teste', 'root', 'formula1', {
    host: "localhost",
    dialect: "mysql"
});

// Criando um Model de um Banco, cria uma tabela dentro do banco conectado acima:
const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

//Postagem.sync({force:true}); //-> força a tabela a ser gerada

// Retorna um erro se não conseguir se conectar ao banco:
/* sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
}); */

// Criando um módulo de usuários:
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

//Usuario.sync({force:true});