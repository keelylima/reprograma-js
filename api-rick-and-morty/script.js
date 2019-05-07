const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

const h1 = document.createElement('h1');
h1.innerHTML = 'Rick and Morty - API';
root.appendChild(h1);

const authors = document.createElement('div');
authors.setAttribute('class', 'authors');
root.appendChild(authors);


const request = new XMLHttpRequest();

request.open('GET', 'https://rickandmortyapi.com/api/character', true);

request.onload = function () {
    const data = JSON.parse(this.response);
    console.log(data);
    if (request.status >= 200 && request.status < 400) {
        data.results.forEach((user) => {
            
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            authors.appendChild(card);

            let img = document.createElement('img');
            img.setAttribute('src', user.image);
            card.appendChild(img);

            let nome = document.createElement('h2');
            nome.innerHTML = user.name;
            card.appendChild(nome);

            let origem = document.createElement('h3');
            origem.innerHTML = user.origin.name;
            card.appendChild(origem);

            let especie = document.createElement('p');
            especie.innerHTML = user.species;
            card.appendChild(especie);

            let estado = document.createElement('p');
            estado.innerHTML = user.status;
            card.appendChild(estado);
        });
    } else {
        console.log('erro');
    }
}

request.send();


