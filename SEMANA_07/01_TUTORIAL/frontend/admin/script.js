api = 'http://127.0.0.1:3071'


//Document.ready, já renderizou tudo no html, ele roda isso, e ta chamando a função user.list
$(document).ready(() => {
    users.list();
});

var users = {
    
    list() {
        //Chamando o ajax pelo Jquery
        $.ajax({
            //Defini 
            url: api + '/users', //endpoint
            type: 'GET',
            //success é uma propriedade do AJAX (função), em que o primeiro argumento é a resposta da requisição
            //Data é o dado retornado da requisição do endpoint
            //A variavel tx é uma string que no futuro, vai ser renderizada.
            //Para cada linha é um elemento
            //data é um json, são os dados que são recebidos do banco. O que a requisição retorna
            success: data => {
                var tx = '';
                tx += '<div class="insert" onclick="user.insert()">Inserir</div>'; //Link para inserir novo usuário
                //para cada elemento na database, é criado mais uma linha na tabela
                data.forEach(element => {
                    tx += '<div class="user">';
                        tx += '<div class="title">' + `${element.nome} - ${element.email} - ${element.telefone} ` + '</div>';
                        tx += '<div class="actions">';
                        //class action (definido no css, aplicando uma classe de estilo do css)
                        //Caso haja o clique, chamar a função user.update
                            tx += '<div class="action" onclick="user.update(' + element.userId + ',\'' + element.nome + '\')">Editar</div>';
                            tx += '<div class="action" onclick="user.delete(' + element.userId + ')">Excluir</div>';
                        tx += '</div>';
                    tx += '</div>';
                });
                $('#main').html(tx);
            }
        });
        
    }
    
};

var user = {
//Inserindo o usuário
    insert() {
        //Vai receber 3 usuários, e cada um vai ter um prompt (Aquele alerta lá em cima)
        var nome = prompt('Digite o nome:');
        var email = prompt('Digite o email:');
        var telefone = prompt('Digite o telefone:');
        // Vai mostrar no terminal as variaveis
        console.log(`${nome} - ${email} - ${telefone}`);
//Caso forem digitados, vai tirar as partes em branco. 
        if (nome && email && telefone) {
            if (nome.trim() != '' && email.trim() != '' && telefone.trim() != '') {
                //Caso não tenha nada em branco, executa o AJAX
                //O ajax que integra, ou que chama direto a função do CRUD (backend)
                $.ajax({
                    type: 'POST',
                    url: api + '/userinsert',
                    //Chave, valor recebido da variavel da cima
                    data: {nome: nome, email: email, telefone: telefone},
                    //Vai mosntrar a lista de usuário
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                    //Sempre executa a always
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },


    update(userId, oldTitle) {
        //Cria variavel promt, verifica se está vazia, e manda p ajax
        var nome = prompt('Digite o novo nome:', oldTitle);
        if (nome) {
            if (nome.trim() != '') {
                //ajax faz requisição para o backend
                $.ajax({
                    type: 'POST',
                    url: api + '/userupdate',
                    data: {nome: nome, userId: userId},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },

    delete(userId) {

        if (confirm('Confirma a exclusão?')) {
            $.ajax({
                type: 'POST',
                url: api + '/userdelete',
                data: {userId: userId},
            }).done(function () {
                users.list();
            }).fail(function (msg) {
                //console.log('FAIL');
            }).always(function (msg) {
                //console.log('ALWAYS');
            });
        }
    },

}