console.log("Abrindo rotas - habilidade routes")

const express = require('express');

const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();


console.log("Requisição em controller, habilidadeController - routes")
const controller = require("../controller/habilidadeController")





//CRUD da família pessoaRouter:
//Chama a função do controller chamada getAll

router.get("/", controller.getAll)

router.post("/", urlencodedParser, controller.post);

router.get("/:IDHabilidade", controller.getByID);

router.put("/:IDHabilidade", urlencodedParser, controller.putByID);

router.delete("/:IDHabilidade", urlencodedParser, controller.deleteByID);




module.exports = router;
