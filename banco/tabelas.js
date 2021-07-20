class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criaratendimento()
        console.log('Sucesso');
    }

      criaratendimento(){
          const sql = 'CREATE TABLE if not exists Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, data datetime not null, dataCriacao datetime not null, observacoes text, PRIMARY KEY(id))'
             this.conexao.query(sql, (erro) =>{
                 if(erro){
                     console.log('ERRO')
                 }else{
                    console.log('Sucesso na Criação');
                 }
             })
        }
}
module.exports = new Tabelas

