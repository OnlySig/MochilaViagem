const form = document.querySelector('#novoItem')
const list = document.querySelector('#lista')
const nada = document.querySelector('#off')
const remover = document.querySelector('#remove')
const itens = JSON.parse(localStorage.getItem("itens")) || []

remover.addEventListener('click', () =>{
  localStorage.clear()
  location.reload() //recarrega a página automaticamente
})

itens.forEach(element => {
  if(element.constructor.length > 0) {
    criaElemento(element)
    nada.classList.add('off')
  }
});

form.addEventListener('submit', (event) => {
  const nome = event.target.elements['nome'];
  const qtd = event.target.elements['quantidade'];
  const personagem = event.target.elements['personagem']
  const existe = itens.find(element => element.nome === nome.value)

  const itemAtual = {
    "nome": nome.value,
    "qtd": qtd.value,
    "personagem": personagem.value
  }
  event.preventDefault()
  if(nome.value === '' || qtd.value === '' || qtd.value <= 0) {
  alert('[ERRO] valores invalidos')
  } else if(existe) {
    itemAtual.id = existe.id
    atualizaElemento(itemAtual)
    itens[itens.findIndex(element => element.id === existe.id)] = itemAtual
  } else {
    nada.classList.add('off')
    itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0
    criaElemento(itemAtual)
    itens.push(itemAtual)
  }
  localStorage.setItem("itens", JSON.stringify(itens))

  limparForm(nome.value = '', qtd.value = '', personagem.value = '')
})

function criaElemento(item) {
  const novoItem = document.createElement('li')
  novoItem.classList.add('item')
  
  const numero = document.createElement('strong')
  novoItem.appendChild(numero)
  numero.dataset.id = item.id

  const elementoImg = document.createElement('img')
  elementoImg.classList.add('imgPersonagem')
  elementoImg.src = `/personagem/${item.personagem}.png`
  elementoImg.alt = `${item.personagem}`
  
  numero.innerHTML = item.qtd
  novoItem.innerHTML += item.nome
  
  
  novoItem.appendChild(elementoImg)
  novoItem.append(botaoDeleta(item.id))
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