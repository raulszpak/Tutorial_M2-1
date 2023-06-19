console.log("Abrindo models (sql Querys) - experienciaProfissionalModels")


const db = require('sqlite3');



function getAll(db){

        return new Promise((resolve, reject) => {
    
            db.all('SELECT * FROM experienciaprofissional ORDER BY IDExperiencia ASC', (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query getAll feita (Chamada pela função do controller, getAll também) - /experienciaProfissionalModel")

                resolve(rows);
    
            })
    
        })
    
    }

function post(db, params){

        return new Promise((resolve, reject) => {
    
            db.run("INSERT INTO experienciaprofissional (IDPessoa, Nomeempresa, Nomecargo, Datainicio, Datafim, Descricao) VALUES (?, ?, ?, ?, ?, ?)", params , (err) => {
    
                if (err) {
    
                    reject(err);
    
                } else {
                    console.log("Query do POST feita com sucesso - /experienciaProfissionalModel")
                    resolve("Success")
    
                }
    
            })
    
        })
    
    }
        
    

function getByID(db, IDExperiencia){

        return new Promise((resolve, reject) => {
    
            db.all('SELECT IDPessoa, Nomeempresa, Nomecargo, Datainicio, Datafim, Descricao FROM experienciaprofissional WHERE IDExperiencia = ?', [IDExperiencia],  (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query getById feita (Chamada pela função do controller, getById também) - /experienciaProfissionalModel")

                resolve(rows);
    
            })
    
        })
    
    }
    
 

function putByID(db, params) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
        const sqlQuery =
            "UPDATE experienciaprofissional SET IDPessoa = ?, Nomeempresa = ?, Nomecargo = ?, Datainicio = ?, Datafim = ?, Descricao = ? WHERE IDExperiencia = ?";
    
        db.run(sqlQuery, params, (err) => {
            if (err) {
            reject(err);
            } else {
            resolve("Experiencia Profissional atualizado(a)");
            }
        });
        });
    });
    }
      


function deleteByID(db, IDExperiencia){

        return new Promise((resolve, reject) => {
    
            db.all('DELETE FROM experienciaprofissional WHERE IDExperiencia = ?', [IDExperiencia],  (err, rows) => {
    
                if(err){
    
                    reject(err);
    
                }
                console.log("Query deleteById feita (Chamada pela função do controller, getAll também) - /experienciaProfissionalModel")

                resolve(rows);
    
            })
    
        })
    
    }
            

module.exports = {getAll, post, getByID, putByID, deleteByID};