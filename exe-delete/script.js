const root = document.querySelector('#root');
const authors = document.querySelector('.authors');

fetch('https://reqres.in/api/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (dado) {
        dado.data.forEach((user) => {
            // console.log(user);
            
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            authors.appendChild(card);

            let h2 = document.createElement('h2');
            h2.innerHTML = user.first_name;
            card.appendChild(h2);

            let p = document.createElement('p');
            p.innerHTML = user.email;
            card.appendChild(p);

            let btn = document.createElement('button');
            btn.innerHTML = '✖';
            card.appendChild(btn);
        })
    })
    .catch(function (erro) {
        console.log(erro);
    })