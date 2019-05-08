const btn = document.querySelector('#send_form');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    const nome = document.querySelector('#first_name').value;
    const sobrenome = document.querySelector('#last_name').value;
    const email = document.querySelector('#email').value;
    
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'first_name': nome,
            'last_name': sobrenome,
            'email': email,
        })
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        document.querySelector('#message').textContent = 'Sucesso!!';
    })
    .catch(function(erro){
        console.log(erro)
    })
});