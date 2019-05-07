const inputCep = document.querySelector('#cep');
const inputBairro = document.querySelector('#bairro');
const inputEstado = document.querySelector('#estado');
const inputCidade = document.querySelector('#cidade');
const inputEndereco = document.querySelector('#endereco');

inputCep.addEventListener('blur', function() {
    fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            inputBairro.value = data.bairro;
            inputEstado.value = data.uf;
            inputCidade.value = data.localidade;
            inputEndereco.value = data.logradouro;
        })
        .catch(function(erro) {
            console.log(erro);
        })
});

