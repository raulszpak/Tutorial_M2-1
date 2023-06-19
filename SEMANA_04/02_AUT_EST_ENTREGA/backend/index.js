console.log("abrindo index - index")


const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

console.log("Express, bodyParser, urlencoded - index")



console.log("Requisição em middlerares, databaseConnection - index")
const databaseConnection = require("./middlewares/databaseConnection");

const hostname = "127.0.0.1";
const port = 3000;
console.log("Configuração das portas - index")


const app = express();
app.use(express.json());




console.log("Requisição em routes, pessoa - index")
const pessoaRoute = require("./routes/pessoa")
console.log("constante com CRUD da familia pessoaRoute, definido com o PATH (./routes/pessoa) - index")

console.log("Requisição em routes, formacao - index")
const formacaoRoute = require("./routes/formacao")
console.log("constante com CRUD da familia formacaoRoute, definido com o PATH (./routes/formacao) - index")

console.log("Requisição em routes, habilidade - index")
const habilidadeRoute = require("./routes/habilidade")
console.log("constante com CRUD da familia habilidadeRoute, definido com o PATH (./routes/habilidade) - index")

console.log("Requisição em routes, conquista - index")
const conquistaRoute = require("./routes/conquista")
console.log("constante com CRUD da familia conquistaRoute, definido com o PATH (./routes/conquista) - index")

console.log("Requisição em routes, personalidade - index")
const personalidadeRoute = require("./routes/personalidade")
console.log("constante com CRUD da familia personalidadeRoute, definido com o PATH (./routes/personalidade) - index")

console.log("Requisição em routes, experienciaProfissional - index")
const experienciaProfissionalRoute = require("./routes/experienciaProfissional")
console.log("constante com CRUD da familia experienciaProfissionalRoute, definido com o PATH (./routes/experienciaProfissional) - index")



console.log("Roda o middlewarenovamente - index")
app.use(databaseConnection);


//Criando instância da rota da pessoa, (/pessoa (nome do endpoint), e pessoas (Rota para as funções que envolvem a família pessoaRoute))
app.use("/pessoa", pessoaRoute);

app.use("/formacao", formacaoRoute);

app.use("/habilidade", habilidadeRoute);

app.use("/conquista", conquistaRoute);

app.use("/personalidade", personalidadeRoute);

app.use("/experienciaProfissional", experienciaProfissionalRoute);



console.log("Fim index")


app.listen(port, hostname, () => {

    console.log(`Servidor rodando em http://${hostname}:${port}/`);
    
    });