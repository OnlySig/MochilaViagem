const form = document.querySelector('#novoItem')
const lista = document.querySelector('#lista')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  criaElemento(event.target.elements['nome'].value, event.target.elements['quantidade'].value)
})

function criaElemento(nome, qtd) {
  //criação do novo elemento da lista com um class item
  const novoItem = document.createElement('li')
  novoItem.classList.add("item")
  //criação da tag strong com o parâmetro qtd dentro
  const numeroItem = document.createElement('strong')
  numeroItem.innerHTML = qtd
  //aglutinação do novo elemento com a tag strong e o parâmetro nome
  novoItem.appendChild(numeroItem)
  novoItem.innerHTML += nome

  //local aonde será alocado o novo elemento, vulgo, <ul id="lista">...</ul>.
  lista.appendChild(novoItem)

  console.log(lista)

}