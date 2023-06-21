console.log("controller aberto - experienciaProfissionalController")

const express = require("express");

const app = express();

const databaseConnection = require("../middlewares/databaseConnection");

app.use(databaseConnection);

console.log("Requisição em models, experienciaProfissionalModel - controller")
const experienciaProfissionalModel = require("../models/experienciaProfissionalModel.js");



async function getAll(req, res) {

    res.statusCode = 200;
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await experienciaProfissionalModel.getAll(req.db);
    
    res.json(result);

    console.log("requisição getAll feita com sucesso - /experienciaProfissionalController")
    
    }



    
async function post(req, res) {

        res.statusCode = 200;
    
        res.setHeader("Access-Control-Allow-Origin", "*");
    
        const result = await experienciaProfissionalModel.post(req.db, [req.body.IDPessoa, req.body.Nomeempresa, req.body.Nomecargo, req.body.Datainicio, req.body.Datafim, req.body.Descricao]);
    
        res.json(result)

        console.log("requisição POST feita com sucesso - /experienciaProfissinalController")

        }



async function getByID(req, res) {

    res.statusCode = 200;
    req.params.IDExperiencia
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await experienciaProfissionalModel.getByID(req.db, req.params.IDExperiencia);
    
    res.json(result);

    console.log("requisição getByID feita com sucesso - /experienciaProfissionalController")
        }

async function putByID(req, res) {

    res.statusCode = 200;
    
    res.setHeader("Access-Control-Allow-Origin", "*");

    const params = [req.body.IDPessoa, req.body.Nomeempresa, req.body.Nomecargo, req.body.Datainicio, req.body.Datafim, req.body.Descricao, req.params.IDExperiencia]
    
    const result = await experienciaProfissionalModel.putByID(req.db, params);

    res.json(result);

    console.log("requisição putByID feita com sucesso - /experienciaProfissionalController")
        }

async function deleteByID(req, res) {

    res.statusCode = 200;
    req.params.IDExperiencia
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await experienciaProfissionalModel.deleteByID(req.db, req.params.IDExperiencia);
    
    res.json(result);

    console.log("requisição deleteByID feita com sucesso - /experienciaProfissionalController")

        }

module.exports = {post, getAll, getByID, putByID, deleteByID};
