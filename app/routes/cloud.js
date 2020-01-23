//var db = require('../../config/dbConnection')
module.exports = (app)=>{
    app.get('/cloud', (req,res)=>{
      var connection = app.config.dbConnection();
        connection.query("SELECT * FROM conteudo WHERE modulo ='Infraestrutura' ",
            (error, result)=>{
              res.render("./secao/cloud",{dados:result})
            console.log(result)
            })

            
    })
}

