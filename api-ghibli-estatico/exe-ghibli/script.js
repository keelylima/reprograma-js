const obj = [
  {
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world."
  },
  {
    "title": "Grave of the Fireflies",
    "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle."
  },
  {
    "title": "My Neighbor Totoro",
    "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her."
  },
  {
    "title": "Kiki's Delivery Service",
    "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service."
  },
  {
    "title": "Only Yesterday",
    "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self."
  }
]

//COMEÇA O EXERCICIO

//criamos uma constante chamada app que está pegando no html a div root, pelo seu id
const app = document.getElementById('root');

//criamos uma constante chamada container e estamos criando um elemento de div para o nosso html
const container = document.createElement('div');

//dentro da const container, que é a nossa nov div, estamos adicionando uma classe, com o nome container
//setAttribute recebe 2 parametros, o primeiro é o atributo(class, src, etc) e o segundo é o valor.
container.setAttribute("class", "container"); //usar para adicionar apenas uma classe, apenas um valor

//dentro da nossa div root estamos adicionando a nova div que criamos, a container
app.appendChild(container);
// container.classList.add('container') classList é pra mais de um valor;


//começo do loop usando o método forEach, forEach recebe uma função de callback com um ou mais parametros
//nesse exemplo estou passando um parametro, o "filme" e estou usando arrow function
//filme é igual o i de quando fazemos o for, é ele que vai interagir com cada item da minha array obj
obj.forEach((filme) => {

  //usando template string, pedindo pra mostrar no console cada titulo e descrição da minha array de objetos, a obj
  console.log(`${filme.title} ${filme.description}`);
  
  //criamos uma variavel let, que está criando um novo elemento, uma div
  let card = document.createElement("div");
  
  //dentro de card estamos adicionando uma classe com o nome card
  //obs: o nome da classe é aleatorio, não precisa ser o mesmo nome da variavel, apenas é bom fazer sentido com o código em si
  card.setAttribute("class", "card");
  
  //estamos adicionando o nossa variavel card, que é uma criação de uma div com createElement dentro do container que criamos lá em cima
  container.appendChild(card);


  //mesmo processo acima, mas usamos para criar o título de cada card, estamos criando um h1
  let titulo = document.createElement('h1');
  
  //para cada h1 que criamos, estamos aplicando a propriedade innerHTML, essa propriedade pega o conteúdo que está dentro do HTML
  // para "dentro do html" estamos atribuindo o valor de title, filme é o meu parametro lá do forEach que interage com cada titulo
  // da minha array obj
  titulo.innerHTML = filme.title;
  
  //estamos adicionando no card a nossa variavel titulo depois dos processos que fizemos com ela
  //lembrando que o js executa por ordem do que fazemos, logo o que ele está adicionando no card
  //é o nosso h1 depois de receber o valor de filme.title
  card.appendChild(titulo);


  //o mesmo processo para criarmos a descrição dos cards
  let descricao = document.createElement('p');
  descricao.innerHTML = filme.description;
  card.appendChild(descricao);
});


// obj.forEach(function(item){
//   console.log(`${item.title} ${item.description}`);
// });

// for(let i = 0; i < obj.length; i++){
//   console.log(`${obj[i].title} ${obj[i].description}`)
// }
