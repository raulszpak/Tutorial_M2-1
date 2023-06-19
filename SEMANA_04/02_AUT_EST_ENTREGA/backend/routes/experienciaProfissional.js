console.log("Abrindo rotas - experienciaProfissional routes")

const express = require('express');

const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();


console.log("Requisição em controller, experienciaProfissionalController - routes")
const controller = require("../controller/experienciaProfissionalController")





//CRUD da família experienciaProfissionalRouter:
//Chama a função do controller chamada getAll

router.get("/", controller.getAll)

router.post("/", urlencodedParser, controller.post);

router.get("/:IDExperiencia", controller.getByID);

router.put("/:IDExperiencia", urlencodedParser, controller.putByID);

router.delete("/:IDExperiencia", urlencodedParser, controller.deleteByID);




module.exports = router;
