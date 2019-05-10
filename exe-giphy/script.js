const input = document.querySelector('#sticker');
const form = document.querySelector('.form');
const container = document.querySelector('.container');
const btn = document.querySelector('.btn-search-sticker');

let sticker = document.createElement('div');
sticker.setAttribute('class', 'stickers');
container.appendChild(sticker);

btn.addEventListener('click', function (event) {
    event.preventDefault();
    fetch(`https://api.giphy.com/v1/stickers/search?q=${input.value}&api_key=lcOzdeGKzf8Kivh7YHGNt5bOZfp7XZas`)
        .then(function (response) {
            return response.json();
        })
        .then(function (arrayData) {
            // console.log(arrayData);
            arrayData.data.forEach((gif) => {
                // console.log(gif);
                let box = document.createElement('div');
                box.setAttribute('class', 'box');
                sticker.appendChild(box);

                let img = document.createElement('img');
                img.setAttribute('src', gif.images.downsized.url);
                box.appendChild(img);

                btn.addEventListener('click', function () {
                    box.remove();
                });
            });
            form.reset('');
        })
        .catch(function (erro) {
            console.log(erro);
        })
})
