/* 
=======================
Declaração de variáveis
=======================
*/
var getResDiv = "#get";
var getDBResDiv = "#getDB";

/* Função que faz um requisição GET */
function TestGET(){
    var url = "https://jsonplaceholder.typicode.com/todos/1";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    $(getResDiv).append("<br />" + xhttp.responseText); //Adiciona essas respostas ao html, e faz o append no index
    $(getResDiv).append("<br />" + xhttp.responseText.title);
    //console.log(xhttp.responseText);
}

/* Função que faz um requisição GET no nosso banco de dados local */
function TestGETDB(){
    var url = "http://127.0.0.1:3071/users";
    var resposta;

    // xhttp é para abrir um novo objeto. Vou usar isso para chamar os métodos html
    //você só precisa informar qual é o metodo e qual é a url, pode ser local ou externa
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);
    //quando aponta e faz o append, você diz que ali você vai colocar no campo de texto aquela informação
    $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
     //console.log(xhttp.responseText);
}