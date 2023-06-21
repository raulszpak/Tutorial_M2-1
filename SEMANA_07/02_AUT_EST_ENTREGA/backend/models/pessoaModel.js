
console.log("Abrindo models (sql Querys) - pessoaModels")


const db = require('sqlite3');



function getAll(db){

        return new Promise((resolve, reject) => {
    
            db.all('SELECT * FROM pessoa ORDER BY IDPessoa ASC', (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query getAll feita (Chamada pela função do controller, getAll também) - /pessoaModel")

                resolve(rows);
    
            })
    
        })
    
    }

function post(db, params){

        return new Promise((resolve, reject) => {
    
            db.run("INSERT INTO pessoa (Nome, Idade, Email, Telefone, Endereco, Descricao) VALUES (?, ?, ?, ?, ?, ?)", params , (err) => {
    
                if (err) {
    
                    reject(err);
    
                } else {
                    console.log("Query do POST feita com sucesso - /pessoaModel")
                    resolve("Success")
    
                }
    
            })
    
        })
    
    }
        
    

function getByID(db, IDPessoa){

        return new Promise((resolve, reject) => {
    
            db.all('SELECT Nome, Idade, Email, Telefone, Endereco, Descricao FROM pessoa WHERE IDPessoa = ?', [IDPessoa],  (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query getById feita (Chamada pela função do controller, getAll também) - /pessoaModel")

                resolve(rows);
    
            })
    
        })
    
    }
    
 

function putByID(db, params) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
        const sqlQuery =
            "UPDATE pessoa SET Nome = ?, Idade = ?, Email = ?, Telefone = ?, Endereco = ?, Descricao = ? WHERE IDPessoa = ?";
    
        db.run(sqlQuery, params, (err) => {
            if (err) {
            reject(err);
            } else {
            resolve("Pessoa atualizado(a)");
            }
        });
        });
    });
    }
      











    



function deleteByID(db, IDPessoa){

        return new Promise((resolve, reject) => {
    
            db.all('DELETE FROM pessoa WHERE IDPessoa = ?', [IDPessoa],  (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query deleteById feita (Chamada pela função do controller, getAll também) - /pessoa, Model")

                resolve(rows);
    
            })
    
        })
    
    }
            

module.exports = {getAll, post, getByID, putByID, deleteByID};