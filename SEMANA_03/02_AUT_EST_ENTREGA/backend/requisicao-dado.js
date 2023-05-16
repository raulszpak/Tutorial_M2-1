// Estou criando a instância do que vai me permitir criar os endpoints
// Cria o objeto que permite fazer uso do app.use etc
const express = require('express');

// Acesso a requisição
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Instancia o banco de dados

const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../data/ponderada2a.db';

const app = express();

app.use(express.json());



// ---------------------- INICIO CRUD ----------------------------------------- //


//                       INICIO COM O POST                                      //

// Insere um registro (é o C do CRUD - Create)
// usando o medoto POST, enviar informação para o back. esta colocando informações que podem ser listadas no banco
//Permite acessar o dado por meio do seguinte formato de dados: req.body.nome etc
// Agora, usando o POST para publicar uma pessoa na tabela de pessoas do cv.


app.post('/cadastrar_pessoa', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco. Em todo endpoint que for colocar precisa desse método, para instânciar o objeto
    //insert into (inserir), usuario (nome banco), nas colunas: nome_completo, email, telefone
    sql = "INSERT INTO pessoa (IdPessoa, Nome, Idade, Email, Telefone, Endereco, Descricao) VALUES ('" + req.body.IDPessoa + "', '" + req.body.Nome + "', '" + req.body.Idade + "', '" + req.body.Email + "', '" + req.body.Telefone + "', '" + req.body.Endereco + "', '" + req.body.Descricao + "')";
    //printa a solicitação
    console.log(sql);

    // essa rotina abre o banco coloca as infos e fecha o banco
    //atualiza a db, é a instancia do sqlite na instância do banco.  

    //se tiver um erro ele encerra, se não manda a resposta
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }	
    });
    res.write('<p>USUARIO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
    // metodo que fecha o banco
    db.close(); // Fecha o banco

    //resposta e encerra
    res.end();
});



//Endpoint para postar uma formação academica associada a uma pessoa
app.post('/cadastrar_formacao_academica', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); 
    sql = "INSERT INTO formacao_academica (IDFormacao, IDPessoa, Nomefundacao, Nomecurso, Datainicio, Datafim, Descricao) VALUES ('" + req.body.IDFormacao +"', '" + req.body.IDPessoa +"', '" + req.body.Nomefundacao + "', '" + req.body.Nomecurso + "', '" + req.body.Datainicio +"', '" + req.body.Datafim + "', '" + req.body.Descricao +"')";
    console.log(sql);

    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }	
    });
    res.write('<p>FORMACAO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); 
    res.end();
});


//Endpoint para postar uma habilidade associada a uma pessoa
app.post('/cadastrar_habilidades', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); 
    sql = "INSERT INTO habilidades (IDHabilidade, IDPessoa, Nomehabilidade, Nivelatingido, Descricao) VALUES ('" + req.body.IDHabilidade +"', '" + req.body.IDPessoa +"', '" + req.body.Nomehabilidade + "', '" + req.body.Nivelatingido + "', '" + req.body.Descricao +"')";
    console.log(sql);

    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }	
    });
    res.write('<p>FORMACAO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); 
    res.end();
});


//Endpoint para postar uma conquistas associada a uma pessoa
app.post('/cadastrar_conquistas', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); 
    sql = "INSERT INTO conquistas (IDConquista, IDPessoa, Nomeconquista, Data_conquista, Descricao) VALUES ('" + req.body.IDConquista +"', '" + req.body.IDPessoa +"', '" + req.body.Nomeconquista + "', '" + req.body.Data_conquista + "', '" + req.body.Descricao +"')";
    console.log(sql);

    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }	
    });
    res.write('<p>FORMACAO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); 
    res.end();
});


//Endpoint para postar personalidades associada a uma pessoa
app.post('/cadastrar_personalidade', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); 
    sql = "INSERT INTO personalidade (IDPersonalidade, IDPessoa, Nomepersonalidade, Nivel, Descricao) VALUES ('" + req.body.IDPersonalidade +"', '" + req.body.IDPessoa +"', '" + req.body.Nomepersonalidade + "', '" + req.body.Nivel + "', '" + req.body.Descricao +"')";
    console.log(sql);

    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }	
    });
    res.write('<p>PERSONALIDADE INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); 
    res.end();
});



//Endpoint para postar experiência profissional associada a uma pessoa
app.post('/cadastrar_experienciaprofissional', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); 
    sql = "INSERT INTO experienciaprofissional (IDExperiencia, IDPessoa, Nomeempresa, Nomecargo, Datainicio, Datafim, Descricao) VALUES ('" + req.body.IDExperiencia +"', '" + req.body.IDPessoa +"', '" + req.body.Nomeempresa + "', '" + req.body.Nomecargo + "', '" + req.body.Datainicio +"', '" + req.body.Datafim +"', '" + req.body.Descricao +"')";
    console.log(sql);

    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }	
    });
    res.write('<p>EXPERIÊNCIA PROFISSIONAL INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); 
    res.end();
});




//                 INICIO GET                        //



// Não faz sentido retornar o ID de qual formacao academica que é
// Também não faz sentido mostrar qual é o ID da pessoa que é, uma vez que só será mostrado da pessoa selecionada


// Retorna registros da tabela formacao_academica

app.get('/info_formacao_academica', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT Nomefundacao, Nomecurso, Datainicio, Datafim, Descricao FROM formacao_academica';

    // o que o [] significa mesmo?
    //rows significa colunas/linhas?
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        // Exibe os registros no console
        res.json(rows); // Retorna os registros como resposta da requisição
        console.log(rows);
    });
    db.close(); // Fecha o banco
});


// Retorna registros da tabela pessoa

app.get('/info_pessoa', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT Nome, Idade, Email, Telefone, Endereco, Descricao FROM pessoa';

    // o que o [] significa mesmo?
    //rows significa colunas/linhas?
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        // Exibe os registros no console
        res.json(rows); // Retorna os registros como resposta da requisição
        console.log(rows);
    });
    db.close(); // Fecha o banco
});






















// Remover um dado
app.delete('/formacao_academica', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "DELETE FROM formacao_academica WHERE Nomefundacao='" + req.query.Nomefundacao + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.write('<p>FORMACAO REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end();
    });
    db.close(); // Fecha o banco
});















app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000/');
});




