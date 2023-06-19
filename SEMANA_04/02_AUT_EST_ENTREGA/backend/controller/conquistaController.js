console.log("controller aberto - conquistaController")

const express = require("express");

const app = express();

const databaseConnection = require("../middlewares/databaseConnection");

app.use(databaseConnection);

console.log("Requisição em models, conquistaModel - controller")
const conquistaModel = require("../models/conquistaModel.js");



async function getAll(req, res) {

    res.statusCode = 200;
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await conquistaModel.getAll(req.db);
    
    res.json(result);

    console.log("requisição getAll feita com sucesso - /conquistaController")
    
    }



    
async function post(req, res) {

        res.statusCode = 200;
    
        res.setHeader("Access-Control-Allow-Origin", "*");
    
        const result = await conquistaModel.post(req.db, [req.body.IDPessoa, req.body.Nomeconquista, req.body.Data_conquista, req.body.Descricao]);
    
        res.json(result)

        console.log("requisição POST feita com sucesso - /conquistaController")

        }



async function getByID(req, res) {

    res.statusCode = 200;
    req.params.IDConquista
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await conquistaModel.getByID(req.db, req.params.IDConquista);
    
    res.json(result);

    console.log("requisição getByID feita com sucesso - /conquistaController")
        }

async function putByID(req, res) {

    res.statusCode = 200;
    
    res.setHeader("Access-Control-Allow-Origin", "*");

    const params = [req.body.IDPessoa, req.body.Nomeconquista, req.body.Data_conquista, req.body.Descricao, req.params.IDConquista]
    
    const result = await conquistaModel.putByID(req.db, params);

    res.json(result);

    console.log("requisição putByID feita com sucesso - /conquistaController")
        }

async function deleteByID(req, res) {

    res.statusCode = 200;
    req.params.IDConquista
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await conquistaModel.deleteByID(req.db, req.params.IDConquista);
    
    res.json(result);

    console.log("requisição deleteByID feita com sucesso - /conquistaController")

        }

module.exports = {post, getAll, getByID, putByID, deleteByID};