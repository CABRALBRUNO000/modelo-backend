var db = require('../../config/dbConnection')
module.exports = (app)=>{
    app.get('/infra', (req,res)=>{
        var connection = app.config.dbConnection();
        connection.query("SELECT * FROM conteudo WHERE modulo ='Infraestrutura' ",
            (error, result)=>{
              res.render("./secao/infraestrutura",{dados:result})
            console.log(result)
            })

            
    })
}

