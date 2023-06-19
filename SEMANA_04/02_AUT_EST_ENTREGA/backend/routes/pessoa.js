console.log("Abrindo rotas - pessoa routes")

const express = require('express');

const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();


console.log("Requisição em controller, pessoaController - routes")
const controller = require("../controller/pessoaController")





//CRUD da família pessoaRouter:
//Chama a função do controller chamada getAll

router.get("/", controller.getAll)

router.post("/", urlencodedParser, controller.post);

router.get("/:IDPessoa", controller.getByID);

router.put("/:IDPessoa", urlencodedParser, controller.putByID);

router.delete("/:IDPessoa", urlencodedParser, controller.deleteByID);




module.exports = router;
