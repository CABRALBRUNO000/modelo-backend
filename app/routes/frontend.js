var db = require('../../config/dbConnection')
module.exports = (app)=>{
    app.get('/frontend', (req,res)=>{
        var connection = app.config.dbConnection();
        connection.query("SELECT * FROM conteudo WHERE modulo ='front-end'",
            (error, result)=>{
              res.render("secao/front-end",{dados:result})
            console.log(result)
            })

            
    })
}

