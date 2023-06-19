console.log("Abrindo models (sql Querys) - conquistaModels")


const db = require('sqlite3');



function getAll(db){

        return new Promise((resolve, reject) => {
    
            db.all('SELECT * FROM conquistas ORDER BY IDConquista ASC', (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query getAll feita (Chamada pela função do controller, getAll também) - /conquistaModel")

                resolve(rows);
    
            })
    
        })
    
    }

function post(db, params){

        return new Promise((resolve, reject) => {
    
            db.run("INSERT INTO conquistas (IDPessoa, Nomeconquista, Data_conquista, Descricao) VALUES (?, ?, ?, ?)", params , (err) => {
    
                if (err) {
    
                    reject(err);
    
                } else {
                    console.log("Query do POST feita com sucesso - /conquistaModel")
                    resolve("Success")
    
                }
    
            })
    
        })
    
    }
        
    

function getByID(db, IDConquista){

        return new Promise((resolve, reject) => {
    
            db.all('SELECT IDPessoa, Nomeconquista, Data_conquista, Descricao FROM conquistas WHERE IDConquista = ?', [IDConquista],  (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query getById feita (Chamada pela função do controller, getById também) - /conquistaModel")

                resolve(rows);
    
            })
    
        })
    
    }
    
 

function putByID(db, params) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
        const sqlQuery =
            "UPDATE conquistas SET IDPessoa = ?, Nomeconquista = ?, Data_conquista = ?, Descricao = ? WHERE IDConquista = ?";
    
        db.run(sqlQuery, params, (err) => {
            if (err) {
            reject(err);
            } else {
            resolve("Conquista atualizado(a)");
            }
        });
        });
    });
    }
      


function deleteByID(db, IDConquista){

        return new Promise((resolve, reject) => {
    
            db.all('DELETE FROM conquistas WHERE IDConquista = ?', [IDConquista],  (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query deleteById feita (Chamada pela função do controller, getAll também) - /conquistaModel")

                resolve(rows);
    
            })
    
        })
    
    }
            

module.exports = {getAll, post, getByID, putByID, deleteByID};