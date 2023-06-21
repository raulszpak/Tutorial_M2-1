console.log("Abrindo rotas - formacao routes")

const express = require('express');

const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();


console.log("Requisição em controller, formacaoController - routes")
const controller = require("../controller/formacaoController")





//CRUD da família pessoaRouter:
//Chama a função do controller chamada getAll

router.get("/", controller.getAll)

router.post("/", urlencodedParser, controller.post);

router.get("/:IDFormacao", controller.getByID);

router.put("/:IDFormacao", urlencodedParser, controller.putByID);

router.delete("/:IDFormacao", urlencodedParser, controller.deleteByID);




module.exports = router;
