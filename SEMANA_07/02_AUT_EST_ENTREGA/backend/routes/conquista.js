console.log("Abrindo rotas - conquista routes")

const express = require('express');

const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();


console.log("Requisição em controller, conquistaController - routes")
const controller = require("../controller/conquistaController")





//CRUD da família conquistaRouter:
//Chama a função do controller chamada getAll

router.get("/", controller.getAll)

router.post("/", urlencodedParser, controller.post);

router.get("/:IDConquista", controller.getByID);

router.put("/:IDConquista", urlencodedParser, controller.putByID);

router.delete("/:IDConquista", urlencodedParser, controller.deleteByID);




module.exports = router;
