console.log("controller aberto - habilidadeController")

const express = require("express");

const app = express();

const databaseConnection = require("../middlewares/databaseConnection");

app.use(databaseConnection);

console.log("Requisição em models, habilidadeModel - controller")
const habilidadeModel = require("../models/habilidadeModel.js");



async function getAll(req, res) {

    res.statusCode = 200;
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await habilidadeModel.getAll(req.db);
    
    res.json(result);

    console.log("requisição getAll feita com sucesso - /habilidadeController")
    
    }



    
async function post(req, res) {

        res.statusCode = 200;
    
        res.setHeader("Access-Control-Allow-Origin", "*");
    
        const result = await habilidadeModel.post(req.db, [req.body.IDPessoa, req.body.Nomehabilidade, req.body.Nivelatingido, req.body.Descricao]);
    
        res.json(result)

        console.log("requisição POST feita com sucesso - /habilidadeController")

        }



async function getByID(req, res) {

    res.statusCode = 200;
    req.params.IDHabilidade
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await habilidadeModel.getByID(req.db, req.params.IDHabilidade);
    
    res.json(result);

    console.log("requisição getByID feita com sucesso - /habilidadeController")
        }

async function putByID(req, res) {

    res.statusCode = 200;
    
    res.setHeader("Access-Control-Allow-Origin", "*");

    const params = [req.body.IDPessoa, req.body.Nomehabilidade, req.body.Nivelatingido, req.body.Descricao, req.params.IDHabilidade]
    
    const result = await habilidadeModel.putByID(req.db, params);

    res.json(result);

    console.log("requisição putByID feita com sucesso - /habilidadeController")
        }

async function deleteByID(req, res) {

    res.statusCode = 200;
    req.params.IDHabilidade
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const result = await habilidadeModel.deleteByID(req.db, req.params.IDHabilidade);
    
    res.json(result);

    console.log("requisição deleteByID feita com sucesso - /habilidadeController")

        }

module.exports = {post, getAll, getByID, putByID, deleteByID};