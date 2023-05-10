const form = document.querySelector('#novoItem')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  criaElemento(event.target.elements['nome'].value, event.target.elements['quantidade'].value)
})

function criaElemento(nome, qtd) {
  //criação da lista com a class item
  const novoItem = document.createElement('li')
  novoItem.classList.add("item")
  //criação da tag strong com a quantidade do item dentro
  const numeroItem = document.createElement('strong')
  numeroItem.innerHTML = qtd
  //aglutinação da lista com a tag strong e o parâmetro nome
  novoItem.appendChild(numeroItem)
  novoItem.innerHTML += nome

  console.log(novoItem)

}