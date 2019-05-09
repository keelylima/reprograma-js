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
            card.setAttribute('id', user.id);
            authors.appendChild(card);

            let h2 = document.createElement('h2');
            h2.innerHTML = `${user.first_name} ${user.last_name}`;
            card.appendChild(h2);

            let p = document.createElement('p');
            p.innerHTML = user.email;
            card.appendChild(p);

            let btn = document.createElement('button');
            btn.innerHTML = '✖';
            btn.setAttribute('data-id', user.id);
            card.appendChild(btn);

            btn.addEventListener('click', function(){
                // const thisCard = btn.parentElement;
                // console.log(thisCard);
                // const cardPai = thisCard.parentElement;
                // console.log(cardPai);

                fetch('https://reqres.in/api/users', {
                    method: 'DELETE',
                    headers: {
                        'Accepet': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'id': btn.getAttribute('data-id')
                    })
                })
                .then(function(){
                    card.remove();
                    // cardPai.removeChild(thisCard);

                })
                .catch(function(erro){
                    console.log(erro)
                })
            })
        })
    })
    .catch(function (erro) {
        console.log(erro);
    })