console.log("Abrindo models (sql Querys) - personalidadeModels")


const db = require('sqlite3');



function getAll(db){

        return new Promise((resolve, reject) => {
    
            db.all('SELECT * FROM personalidade ORDER BY IDPersonalidade ASC', (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query getAll feita (Chamada pela função do controller, getAll também) - /personalidadeModel")

                resolve(rows);
    
            })
    
        })
    
    }

function post(db, params){

        return new Promise((resolve, reject) => {
    
            db.run("INSERT INTO personalidade (IDPessoa, Nomepersonalidade, Nivel, Descricao) VALUES (?, ?, ?, ?)", params , (err) => {
    
                if (err) {
    
                    reject(err);
    
                } else {
                    console.log("Query do POST feita com sucesso - /personalidadeModel")
                    resolve("Success")
    
                }
    
            })
    
        })
    
    }
        
    

function getByID(db, IDPersonalidade){

        return new Promise((resolve, reject) => {
    
            db.all('SELECT IDPessoa, Nomepersonalidade, Nivel, Descricao FROM personalidade WHERE IDPersonalidade = ?', [IDPersonalidade],  (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query getById feita (Chamada pela função do controller, getById também) - /personalidadeModel")

                resolve(rows);
    
            })
    
        })
    
    }
    
 

function putByID(db, params) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
        const sqlQuery =
            "UPDATE personalidade SET IDPessoa = ?, Nomepersonalidade = ?, Nivel = ?, Descricao = ? WHERE IDPersonalidade = ?";
    
        db.run(sqlQuery, params, (err) => {
            if (err) {
            reject(err);
            } else {
            resolve("Personalidade atualizado(a)");
            }
        });
        });
    });
    }
      


function deleteByID(db, IDPersonalidade){

        return new Promise((resolve, reject) => {
    
            db.all('DELETE FROM personalidade WHERE IDPersonalidade = ?', [IDPersonalidade],  (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query deleteById feita (Chamada pela função do controller, getAll também) - /personalidadeModel")

                resolve(rows);
    
            })
    
        })
    
    }
            

module.exports = {getAll, post, getByID, putByID, deleteByID};