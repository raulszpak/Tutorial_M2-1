console.log("Abrindo rotas - personalidade routes")

const express = require('express');

const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();


console.log("Requisição em controller, personalidadeController - routes")
const controller = require("../controller/personalidadeController")





//CRUD da família conquistaRouter:
//Chama a função do controller chamada getAll

router.get("/", controller.getAll)

router.post("/", urlencodedParser, controller.post);

router.get("/:IDPersonalidade", controller.getByID);

router.put("/:IDPersonalidade", urlencodedParser, controller.putByID);

router.delete("/:IDPersonalidade", urlencodedParser, controller.deleteByID);




module.exports = router;
