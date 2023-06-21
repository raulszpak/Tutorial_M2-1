function fetchDataFormacao(url){
    console.log("FETCH formacao FUNCIONANDOOOOOOOOO")
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        let infoFormacao = data;
        let saida = '<div class="formacaoAcademica">';
        infoFormacao.map(function(infoFormacao){
            saida += '<div class="infoFormacao"><p><b>'+ `${infoFormacao.Nomecurso}` + ' | </b>';
            saida += `<span class="Datainicio">${infoFormacao.Datainicio}</span>-<span class="Datafim">${infoFormacao.Datafim}</span></p>`;
            saida += `<span class="Descricao">${infoFormacao.Descricao}</span></div>`   
        })
        saida += '</div>';
        document.getElementById('resultadoFormacaoAcademica').innerHTML = saida;
    })
    .catch(function(error){
        console.log(error);
    });
}


function fetchDataConquista(url){
    console.log("FETCH conquista FUNCIONANDoo")
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        let infoConquista = data;
        let saida = '<div class="conquista">';
        infoConquista.map(function(infoConquista){
            saida += '<div class="infoConquista"><p><b>'+ `${infoConquista.Nomeconquista}` + ' | </b>';
            saida += `<span class="Data_conquista">${infoConquista.Data_conquista}</span></p>`;
            saida += `<span class="Descricao">${infoConquista.Descricao}</span></div>`   
        })
        saida += '</div>';
        document.getElementById('resultadoConquista').innerHTML = saida;
    })
    .catch(function(error){
        console.log(error);
    });
}

function fetchDataExperienciaProfissional(url){
    console.log("FETCH Experiência Profissional FUNCIONANDoo")
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        let infoExperienciaProfissional = data;
        let saida = '<div class="conquista">';
        infoExperienciaProfissional.map(function(infoExperienciaProfissional){
            saida += '<div class="infoExperienciaProfissional"><p><b>'+ `${infoExperienciaProfissional.Nomeempresa}` + ' | </b>';
            saida += `<span class="Datafim">${infoExperienciaProfissional.Datafim}</span> | <span class="Nomecargo">${infoExperienciaProfissional.Nomecargo}</span></p>`;
            saida += `<span class="Descricao">${infoExperienciaProfissional.Descricao}</span></div>`   
        })
        saida += '</div>';
        document.getElementById('resultadoExperienciaProfissional').innerHTML = saida;
    })
    .catch(function(error){
        console.log(error);
    });
}

function fetchDataHabilidade(url){
    console.log("FETCH habilidade FUNCIONANDoo")
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        let infoHabilidade = data;
        let saida = '<div class="habilidade">';
        infoHabilidade.map(function(infoHabilidade){
            saida += '<div class="infoHabilidade"><p><b>'+ `${infoHabilidade.Nomehabilidade}` + ' | </b>';
            saida += `<span class="Nivelatingido">${infoHabilidade.Nivelatingido}</span></p></div>`;
        })
        saida += '</div>';
        document.getElementById('resultadoHabilidade').innerHTML = saida;
    })
    .catch(function(error){
        console.log(error);
    });
}

function fetchDataPersonalidade(url){
    console.log("FETCH Personalidade FUNCIONANDoo")
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        let infoPersonalidade = data;
        let saida = '<div class="personalidade">';
        infoPersonalidade.map(function(infoPersonalidade){
            saida += '<div class="infoPersonalidade"><p><b>'+ `${infoPersonalidade.Nomepersonalidade}` + ' | </b>';
            saida += `<span class="Nivel">${infoPersonalidade.Nivel}</span></p></div>`;
        })
        saida += '</div>';
        document.getElementById('resultadoPersonalidade').innerHTML = saida;
    })
    .catch(function(error){
        console.log(error);
    });
}

function fetchDataPerfil(url){
    console.log("FETCH Personalidade FUNCIONANDoo")
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        let infoPerfil = data;
        let saida = '<div class="perfil">';
        infoPerfil.map(function(infoPerfil){
            saida += '<div class="infoPerfil"><p><b>'+ `${infoPerfil.Nome}` + ' | </b>';
            saida += `<span class="Idade">${infoPerfil.Idade}</span></p></div>`;
            saida += `<span class="Email">${infoPerfil.Email}</span>| <span>${infoPerfil.Telefone}</span></div>`   

        })
        saida += '</div>';
        document.getElementById('resultadoPerfil').innerHTML = saida;
    })
    .catch(function(error){
        console.log(error);
    });
}
















document.addEventListener('DOMContentLoaded', function(){
    fetchDataFormacao("http://localhost:3000/formacao");
});

document.addEventListener('DOMContentLoaded', function(){
    fetchDataConquista("http://localhost:3000/conquista");
});

document.addEventListener('DOMContentLoaded', function(){
    fetchDataExperienciaProfissional("http://localhost:3000/experienciaProfissional");
});

document.addEventListener('DOMContentLoaded', function(){
    fetchDataHabilidade("http://localhost:3000/habilidade");
});

document.addEventListener('DOMContentLoaded', function(){
    fetchDataPersonalidade("http://localhost:3000/personalidade");
});

document.addEventListener('DOMContentLoaded', function(){
    fetchDataPerfil("http://localhost:3000/pessoa/1");
});