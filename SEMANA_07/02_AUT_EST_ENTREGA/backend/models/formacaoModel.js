console.log("Abrindo models (sql Querys) - formacaoModels")


const db = require('sqlite3');



function getAll(db){

        return new Promise((resolve, reject) => {
    
            db.all('SELECT * FROM formacao_academica ORDER BY IDFormacao ASC', (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query getAll feita (Chamada pela função do controller, getAll também) - /formacaoModel")

                resolve(rows);
    
            })
    
        })
    
    }

function post(db, params){

        return new Promise((resolve, reject) => {
    
            db.run("INSERT INTO formacao_academica (IDPessoa, Nomefundacao, Nomecurso, Datainicio, Datafim, Descricao) VALUES (?, ?, ?, ?, ?, ?)", params , (err) => {
    
                if (err) {
    
                    reject(err);
    
                } else {
                    console.log("Query do POST feita com sucesso - /formacaoModel")
                    resolve("Success")
    
                }
    
            })
    
        })
    
    }
        
    

function getByID(db, IDFormacao){

        return new Promise((resolve, reject) => {
    
            db.all('SELECT IDPessoa, Nomefundacao, Nomecurso, Datainicio, Datafim, Descricao FROM formacao_academica WHERE IDFormacao = ?', [IDFormacao],  (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query getById feita (Chamada pela função do controller, getById também) - /formacaoModel")

                resolve(rows);
    
            })
    
        })
    
    }
    
 

function putByID(db, params) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
        const sqlQuery =
            "UPDATE formacao_academica SET IDPessoa = ?, Nomefundacao = ?, Nomecurso = ?, Datainicio = ?, Datafim = ?, Descricao = ? WHERE IDFormacao = ?";
    
        db.run(sqlQuery, params, (err) => {
            if (err) {
            reject(err);
            } else {
            resolve("Formacao atualizado(a)");
            }
        });
        });
    });
    }
      


function deleteByID(db, IDFormacao){

        return new Promise((resolve, reject) => {
    
            db.all('DELETE FROM formacao_academica WHERE IDFormacao = ?', [IDFormacao],  (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query deleteById feita (Chamada pela função do controller, getAll também) - /formacaoModel")

                resolve(rows);
    
            })
    
        })
    
    }
            

module.exports = {getAll, post, getByID, putByID, deleteByID};