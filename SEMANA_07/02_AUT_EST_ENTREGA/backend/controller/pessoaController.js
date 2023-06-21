console.log("controller aberto - controller")

const express = require("express");

const app = express();

const databaseConnection = require("../middlewares/databaseConnection");

app.use(databaseConnection);

console.log("Requisição em models, pessoaModel - controller")
const pessoaModel = require("../models/pessoaModel.js");



async function getAll(req, res) {

    res.statusCode = 200;
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await pessoaModel.getAll(req.db);
    
    res.json(result);

    console.log("requisição getAll feita com sucesso - /pessoaController")
    
    }


async function post(req, res) {

        res.statusCode = 200;
    
        res.setHeader("Access-Control-Allow-Origin", "*");
    
        const result = await pessoaModel.post(req.db, [req.body.Nome, req.body.Idade, req.body.Email, req.body.Telefone, req.body.Endereco, req.body.Descricao]);
    
        res.json(result)

        console.log("requisição POST feita com sucesso - /pessoaController")

        }



async function getByID(req, res) {

    res.statusCode = 200;
    req.params.IDPessoa
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await pessoaModel.getByID(req.db, req.params.IDPessoa);
    
    res.json(result);

    console.log("requisição getByID feita com sucesso - /pessoaController")
        }

async function putByID(req, res) {

    res.statusCode = 200;
    
    res.setHeader("Access-Control-Allow-Origin", "*");

    const params = [req.body.Nome, req.body.Idade, req.body.Email, req.body.Telefone, req.body.Endereco, req.body.Descricao, req.params.IDPessoa]
    
    const result = await pessoaModel.putByID(req.db, params);

    res.json(result);

    console.log("requisição substituiByID feita com sucesso - /pessoaController")
        }

async function deleteByID(req, res) {

    res.statusCode = 200;
    req.params.IDPessoa
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await pessoaModel.deleteByID(req.db, req.params.IDPessoa);
    
    res.json(result);

    console.log("requisição deleteByID feita com sucesso - /pessoaController")

        }

module.exports = {post, getAll, getByID, putByID, deleteByID};









