const form = document.querySelector('#novoItem')
const list = document.querySelector('#lista')
const itens = JSON.parse(localStorage.getItem("itens")) || []
const remover = document.querySelector('#remove')

remover.addEventListener('click', () =>{
  localStorage.clear()
  location.reload() //recarrega a página automaticamente
})

itens.forEach(element => {
  criaElemento(element)
});

form.addEventListener('submit', (event) => {
  const nome = event.target.elements['nome'];
  const qtd = event.target.elements['quantidade'];
  const existe = itens.find(element => element.nome === nome.value)

  const itemAtual = {
    "nome": nome.value,
    "qtd": qtd.value
  }
  event.preventDefault()
  if(nome.value === '' || qtd.value === '' || qtd.value <= 0) {
  alert('[ERRO] valores invalidos')
  } else if(existe) {
    itemAtual.id = existe.id
    atualizaElemento(itemAtual)
    itens[itens.findIndex(element => element.id === existe.id)] = itemAtual
  } else {
    itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0
    criaElemento(itemAtual)
    itens.push(itemAtual)
  }
  localStorage.setItem("itens", JSON.stringify(itens))

  limparForm(nome.value = '', qtd.value = '')

})

function criaElemento(item) {
  const novoItem = document.createElement('li')
  novoItem.classList.add('item')
  
  const numero = document.createElement('strong')
  novoItem.appendChild(numero)
  numero.dataset.id = item.id
  
  numero.innerHTML = item.qtd
  novoItem.innerHTML += item.nome
  
  novoItem.appendChild(botaoDeleta(item.id))
  list.appendChild(novoItem)

}

function atualizaElemento(item) {
  document.querySelector("[data-id='"+item.id+"']").innerHTML = item.qtd
}

function botaoDeleta(id) {
  const elementoBotao = document.createElement("button")
  elementoBotao.classList.add('removeItem')
  elementoBotao.innerHTML = "X"

  elementoBotao.addEventListener('click', function()  {
    deletaElemento(this.parentNode, id)
  })

  return elementoBotao;
}

function deletaElemento(tag, id) {
  tag.remove()
  itens.splice(itens.findIndex(element => element.id === id), 1)
  localStorage.setItem("itens", JSON.stringify(itens))
}

function limparForm() {
}