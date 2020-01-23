var db = require('../../config/dbConnection')
module.exports = (app)=>{
    app.get('/backend', (req,res)=>{
      var connection = app.config.dbConnection();
        connection.query("SELECT * FROM conteudo WHERE modulo ='back-end'",
            (error, result)=>{
              res.render("./secao/back-end",{dados:result})
            console.log(result)
            })

            
    })
}

