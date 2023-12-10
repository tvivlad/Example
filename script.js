let item=document.getElementById('item')
let add_btn=document.getElementById('add_btn')
let newItem=document.getElementById('list')

const items=[]
add_btn.onclick=function(){
    console.log("введеный элемент", item.value)
    items.push(item.value)
    list.innerHTML=''
    for(let item of items){
        list.innerHTML+=`<li>${item}</li>`
    }
}