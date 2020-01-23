var db = require('../../config/dbConnection')
module.exports = (app)=>{
    app.get('/', (req,res)=>{
      var connection = app.config.dbConnection();
        connection.query("SELECT * FROM conteudo ",
            (error, result)=>{
              res.render("./secao/home",{dados:result})
            console.log(result)
            })

            
    })
}

