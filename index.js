const btnCadsatrar = document.getElementById("btnCadastrar")
const inName = document.getElementById("inName")
const inCel = document.getElementById("inCel")
const table = document.getElementById("table1")


const local = localStorage
let contatcts = []
let id = 0

function createRow(contact){
    const btnRemove = document.createElement("button")
    btnRemove.innerText ="remover"
    
    const newTr =document.createElement("tr")
    table.appendChild(newTr)

    const newTdId = document.createElement("td")
    const newTdCel = document.createElement("td")
    const newTdName = document.createElement("td")
    const newTdBtn = document.createElement("td")
    newTr.id = contact.oId
    newTdId.innerText = contatcts.indexOf(contact)+1
    newTdCel.innerText = contact.Telefone
    newTdName.innerText = contact.nome
    newTdBtn.appendChild(btnRemove)
    newTr.append(newTdId,newTdName,newTdCel,newTdBtn)
    

    btnRemove.addEventListener('click',function(){
       const pai = btnRemove.parentElement
       table.removeChild(pai.parentElement)

       contatcts = contatcts.filter(function(param){
        return param.oId !== contact.oId
       })
       local.setItem("contacts",JSON.stringify(contatcts))
    })
}

function render() {
    const storage  = local.getItem("contacts")
    if(storage){
    contatcts = JSON.parse(storage)
    }
    contatcts.forEach(function(param){
        createRow(param)
    })
}

btnCadsatrar.addEventListener("click", function () {
    id++
    const save = {
      oId: id,
      Telefone: inCel.value,
      nome: inName.value
    }
  
    contatcts.push(save)
    localStorage.setItem("contacts", JSON.stringify(contatcts))
  
    createRow(save)
  
    inCel.value = ""
    inName.value = ""
  })

  render()