var mysql = require('mysql');

var connMysql = () => {
    console.log('Conexao com o bd foi estabelecida');
return mysql.createConnection({
host: 'localhost',
user: 'bruno',
password: '123',
database: 'projeto_node'
});
};

module.exports= ()=>{
    console.log('O autoload carregou o modulo de conexão com o BD')
    return connMysql
}