const input = document.querySelector('#movie');
const btn = document.querySelector('.btn-search-movie');
const containerMovies = document.querySelector('.movies');

btn.addEventListener('click', function(event){
    event.preventDefault();

    fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=cbe07d82`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);
        data.Search.forEach((movie) => {
            console.log(movie);

            let box = document.createElement('div');
            box.setAttribute('class', 'box');
            containerMovies.appendChild(box);

            let img = document.createElement('img');
            img.setAttribute('src', movie.Poster);
            box.appendChild(img);

            let boxDivider = document.createElement('div');
            boxDivider.setAttribute('class', 'box-divider');
            box.appendChild(boxDivider);

            let p = document.createElement('p');
            boxDivider.appendChild(p);

            let spanTitulo = document.createElement('span');
            spanTitulo.innerHTML = `${movie.Title} (${movie.Year})`;
            p.appendChild(spanTitulo);

            let pType = document.createElement('p');
            pType.innerHTML = movie.Type;
            p.appendChild(pType);

            btn.addEventListener('click', function () {
                box.remove();
            });

        });
    })
    .catch(function(erro){
        console.log(erro);
    })

});