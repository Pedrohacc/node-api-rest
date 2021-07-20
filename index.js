
const customExpress = require('./config/customExpress')
const conexao = require('./banco/conexao') 
const Tabelas = require('./banco/tabelas')

conexao.connect(erro =>{
if(erro){
    console.log('erro na conexão');
}else{
    console.log('Conexão realizada com sucesso');

    Tabelas.init(conexao)

    const app = customExpress();

    app.listen(4000, (erro) =>{
        if(erro){
            console.log('Erro na conexão com a porta')
        }else{
        console.log('Servidor rodando na porta 4000')  
        }
    })
        
    }
  



})


