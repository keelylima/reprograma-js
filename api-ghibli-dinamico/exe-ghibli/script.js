const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute("class", "container"); //usar para adicionar apenas uma classe, apenas um valor
app.appendChild(container);
// container.classList.add('container') classList é pra mais de um valor;

const request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true) //true é para a questão de assincrono, true confirmando que é assincrono ou seja carregar tudo junto

request.onload = function () {
  // const data = this.response; //response é o nosso json(em formato de string), é o que vamos receber
  const data = JSON.parse(this.response); //retorna uma grande string, com json.parse to transformando em json pra poder usar direito no js
  console.log(data);
  // console.log(data[0].producer);

  if (request.status >= 200 && request.status < 400) {
    data.forEach((filme) => {

      let card = document.createElement("div");
      card.setAttribute("class", "card");
      container.appendChild(card);

      let titulo = document.createElement('h1');
      titulo.innerHTML = filme.title;
      card.appendChild(titulo);

      let descricao = document.createElement('p');
      descricao.innerHTML = filme.description;
      card.appendChild(descricao);
    });
  
  } else {
    console.log('Erro!');
  }
}

request.send() //estou mandando a requisição, se for aceita, vai mostrar o que estar no onload

