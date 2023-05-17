const form = document.querySelector('#novoItem')
const list = document.querySelector('#lista')
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(element => {
  criaElemento(element)
});

form.addEventListener('submit', (event) => {
  const nome = event.target.elements['nome'];
  const qtd = event.target.elements['quantidade'];
  const itemAtual = {
    "nome": nome.value,
    "qtd": qtd.value
  }
  event.preventDefault()
  criaElemento(itemAtual)

  itens.push(itemAtual)
  localStorage.setItem("itens", JSON.stringify(itens))

  limparForm(nome.value = '', qtd.value = '')

})

function criaElemento(item) {
  const novoItem = document.createElement('li')
  novoItem.classList.add('item')
  
  const numero = document.createElement('strong')
  novoItem.appendChild(numero)
  
  numero.innerHTML = item.qtd
  novoItem.innerHTML += item.nome
  
  list.appendChild(novoItem)

}

function limparForm() {
}