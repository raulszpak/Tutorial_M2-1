console.log("controller aberto - controller")

const express = require("express");

const app = express();

const databaseConnection = require("../middlewares/databaseConnection");

app.use(databaseConnection);

console.log("Requisição em models, formacaoModel - controller")
const formacaoModel = require("../models/formacaoModel.js");



async function getAll(req, res) {

    res.statusCode = 200;
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await formacaoModel.getAll(req.db);
    
    res.json(result);

    console.log("requisição getAll feita com sucesso - /formacaoController")
    
    }



    
async function post(req, res) {

        res.statusCode = 200;
    
        res.setHeader("Access-Control-Allow-Origin", "*");
    
        const result = await formacaoModel.post(req.db, [req.body.IDPessoa, req.body.Nomefundacao, req.body.Nomecurso, req.body.Datainicio, req.body.Datafim, req.body.Descricao]);
    
        res.json(result)

        console.log("requisição POST feita com sucesso - /formacaoController")

        }



async function getByID(req, res) {

    res.statusCode = 200;
    req.params.IDFormacao
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await formacaoModel.getByID(req.db, req.params.IDFormacao);
    
    res.json(result);

    console.log("requisição getByID feita com sucesso - /formacaoController")
        }

async function putByID(req, res) {

    res.statusCode = 200;
    
    res.setHeader("Access-Control-Allow-Origin", "*");

    const params = [req.body.IDPessoa, req.body.Nomefundacao, req.body.Nomecurso, req.body.Datainicio, req.body.Datafim, req.body.Descricao, req.params.IDFormacao]
    
    const result = await formacaoModel.putByID(req.db, params);

    res.json(result);

    console.log("requisição putByID feita com sucesso - /formacaoController")
        }

async function deleteByID(req, res) {

    res.statusCode = 200;
    req.params.IDFormacao
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await formacaoModel.deleteByID(req.db, req.params.IDFormacao);
    
    res.json(result);

    console.log("requisição deleteByID feita com sucesso - /formacaoController")

        }

module.exports = {post, getAll, getByID, putByID, deleteByID};
