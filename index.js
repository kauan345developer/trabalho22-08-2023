const btnCadsatrar = document.getElementById("btnCadastrar")
const inName = document.getElementById("inName")
const inCel = document.getElementById("inCel")
const table = document.getElementById("table1")


const local = localStorage
let contatcts = []
let id = 0

btnCadsatrar.addEventListener("click",function(){
    const btnRemove = document.createElement("button")
    btnRemove.innerText ="remover"
    id++
    const newTr =document.createElement("tr")
    table.appendChild(newTr)
    const newTdId = document.createElement("td")
    const newTdCel = document.createElement("td")
    const newTdName = document.createElement("td")
    const newTdBtn = document.createElement("td")
    newTr.id = id
    newTdId.innerText = id
    newTdCel.innerText = inCel.value
    newTdName.innerText = inName.value
    newTdBtn.appendChild(btnRemove)
    newTr.append(newTdId,newTdName,newTdCel,newTdBtn)
    const save={
        oId: id,
        Telefone:inCel.value,
        nome:inName.value
     }

    contatcts.push(save)

    const saveString = JSON.stringify(contatcts);


    local.setItem("contacts",saveString)

    btnRemove.addEventListener('click',function(){
       const pai = btnRemove.parentElement
       table.removeChild(pai.parentElement)
    })

    inCel.value =""
    inName.value = ""
})

