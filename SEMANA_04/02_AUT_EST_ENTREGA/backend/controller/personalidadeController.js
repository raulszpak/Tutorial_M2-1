console.log("controller aberto - personalidadeController")

const express = require("express");

const app = express();

const databaseConnection = require("../middlewares/databaseConnection");

app.use(databaseConnection);

console.log("Requisição em models, personalidadeModel - controller")
const personalidadeModel = require("../models/personalidadeModel.js");



async function getAll(req, res) {

    res.statusCode = 200;
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await personalidadeModel.getAll(req.db);
    
    res.json(result);

    console.log("requisição getAll feita com sucesso - /personalidadeController")
    
    }



    
async function post(req, res) {

        res.statusCode = 200;
    
        res.setHeader("Access-Control-Allow-Origin", "*");
    
        const result = await personalidadeModel.post(req.db, [req.body.IDPessoa, req.body.Nomepersonalidade, req.body.Nivel, req.body.Descricao]);
    
        res.json(result)

        console.log("requisição POST feita com sucesso - /personalidadeController")

        }



async function getByID(req, res) {

    res.statusCode = 200;
    req.params.IDPersonalidade
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await personalidadeModel.getByID(req.db, req.params.IDPersonalidade);
    
    res.json(result);

    console.log("requisição getByID feita com sucesso - /personalidadeController")
        }

async function putByID(req, res) {

    res.statusCode = 200;
    
    res.setHeader("Access-Control-Allow-Origin", "*");

    const params = [req.body.IDPessoa, req.body.Nomepersonalidade, req.body.Nivel, req.body.Descricao, req.params.IDPersonalidade]
    
    const result = await personalidadeModel.putByID(req.db, params);

    res.json(result);

    console.log("requisição putByID feita com sucesso - /personalidadeController")
        }

async function deleteByID(req, res) {

    res.statusCode = 200;
    req.params.IDPersonalidade
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await personalidadeModel.deleteByID(req.db, req.params.IDPersonalidade);
    
    res.json(result);

    console.log("requisição deleteByID feita com sucesso - /personalidadeController")

        }

module.exports = {post, getAll, getByID, putByID, deleteByID};