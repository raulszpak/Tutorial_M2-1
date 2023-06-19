console.log("Abrindo models (sql Querys) - habilidadeModels")


const db = require('sqlite3');



function getAll(db){

        return new Promise((resolve, reject) => {
    
            db.all('SELECT * FROM habilidades ORDER BY IDHabilidade ASC', (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query getAll feita (Chamada pela função do controller, getAll também) - /habilidadeModel")

                resolve(rows);
    
            })
    
        })
    
    }

function post(db, params){

        return new Promise((resolve, reject) => {
    
            db.run("INSERT INTO habilidades (IDPessoa, Nomehabilidade, Nivelatingido, Descricao) VALUES (?, ?, ?, ?)", params , (err) => {
    
                if (err) {
    
                    reject(err);
    
                } else {
                    console.log("Query do POST feita com sucesso - /habilidadeModel")
                    resolve("Success")
    
                }
    
            })
    
        })
    
    }
        
    

function getByID(db, IDHabilidade){

        return new Promise((resolve, reject) => {
    
            db.all('SELECT IDPessoa, Nomehabilidade, Nivelatingido, Descricao FROM habilidades WHERE IDHabilidade = ?', [IDHabilidade],  (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query getById feita (Chamada pela função do controller, getById também) - /habilidadeModel")

                resolve(rows);
    
            })
    
        })
    
    }
    
 

function putByID(db, params) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
        const sqlQuery =
            "UPDATE habilidades SET IDPessoa = ?, Nomehabilidade = ?, Nivelatingido = ?, Descricao = ? WHERE IDHabilidade = ?";
    
        db.run(sqlQuery, params, (err) => {
            if (err) {
            reject(err);
            } else {
            resolve("Habilidade atualizado(a)");
            }
        });
        });
    });
    }
      


function deleteByID(db, IDHabilidade){

        return new Promise((resolve, reject) => {
    
            db.all('DELETE FROM habilidades WHERE IDHabilidade = ?', [IDHabilidade],  (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query deleteById feita (Chamada pela função do controller, getAll também) - /habilidadeModel")

                resolve(rows);
    
            })
    
        })
    
    }
            

module.exports = {getAll, post, getByID, putByID, deleteByID};