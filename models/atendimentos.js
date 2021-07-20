const conexao = require('../banco/conexao')
const moment = require('moment')

class Atendimento{

    adiciona(atendimento, res){

        const dataCriacao =  moment('DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
       
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
       
        const dataevalida = moment(data).isSameOrAfter(dataCriacao)
        const clienteevalido = atendimento.cliente.length >= 5;

        const validacoes = [
            {nome: 'data',
             valido: dataevalida,
             mensagem: 'Data deve ser maior ou igual a data atual'
            },
            
            {nome: 'cliente',
            valido: clienteevalido,
            mensagem: 'Cliente deve ter pelo menos cinco caracteres'
           }
        ]

       
         const erros = validacoes.filter(campo => !campo.valido)
         const existe = erros.length;

         if(existe){
                res.json(erros)
         }else{

         
       
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados)=>{
            
            if(erro){
               res.json(erro)
            }else{
                res.json(resultados)
            }
            
        })

    }

    }

     lista(res){
         const sql = "SELECT * FROM atendimentos"
        conexao.query(sql, (erro, resultados) =>{
            if(erro){
                console.log('erro')
            }else{
                    console.log(resultados)
            }

        })
     
        }


        buscaPorId(id, res) {
            const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;
        
            conexao.query(sql, (erro, resultados) => { 
                if(erro) { 
                    res.status(400).json(erro);
                } else {
                    res.status(200).json(resultados);
                }
        
            })
     
        }

        altera(id, valores, res) {
            const sql = 'UPDATE Atendimentos SET ? WHERE id=?'
        
            conexao.query(sql, [valores, id], (erro, resultados) => { 
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(200).json({...valores,id})
                }
                 })
        }

        deleta(id, res) {
            const sql = 'DELETE FROM Atendimentos WHERE id=?'
        
            conexao.query(sql, id, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(200).json({id})
                }
            })
        }
         

        



}

module.exports = new Atendimento