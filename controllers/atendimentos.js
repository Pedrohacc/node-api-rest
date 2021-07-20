const Atendimento = require('../models/atendimentos')

// exportando 
module.exports = app => {
    app.get('/atendimentos', function(req, res){ 
        
        
         Atendimento.lista(res)
    
    } );
    app.get('/atendimentos/:id', function(req, res){ 
        const id = parseInt(req.params.id)
        
        Atendimento.buscarid(id,res)
         
         } );



app.post('/atendimentos', (req, res) =>{
    const atendimento = req.body

    Atendimento.adiciona(atendimento, res)
    
})

app.patch('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body

    Atendimento.altera(id, valores, res)
})

app.delete('/atendimentos/:id', (req, res) => { 
    const id = parseInt(req.params.id)

    Atendimento.deleta(id, res)
})

}