const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

const h1 = document.createElement('h1');
h1.innerHTML = 'Colaboradores';
root.appendChild(h1);

const authors = document.createElement('div');
authors.setAttribute('class', 'authors');
root.appendChild(authors);

const request = new XMLHttpRequest();

request.open('GET', 'https://randomuser.me/api/?results=10', true);

request.onload = function () {
    const data = JSON.parse(this.response);
    console.log(data);
    if (request.status >= 200 && request.status < 400) {
        data.results.forEach((user) => {
            
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            authors.appendChild(card);

            let img = document.createElement('img');
            img.setAttribute('src', user.picture.large);
            card.appendChild(img);

            let h2 = document.createElement('h2');
            firstName = user.name.first;
            lastName = user.name.last;
            title = user.name.title;
            h2.innerHTML = `${title}. ${firstName} ${lastName}`;
            card.appendChild(h2);

            let h3 = document.createElement('h3');
            cidade = user.location.city;
            estado = user.nat;
            h3.innerHTML = `${cidade}, ${estado}`;
            card.appendChild(h3);

            let email = document.createElement('p');
            email.innerHTML = user.email;
            card.appendChild(email);

            let cel = document.createElement('p');
            cel.innerHTML = user.cell;
            card.appendChild(cel);
        });
    } else {
        console.log('erro');
    }
}

request.send();


