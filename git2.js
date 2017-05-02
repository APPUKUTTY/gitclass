

var inputs = document.getElementById("todo")
var list=document.getElementById("todo-list")
var buttonn=document.getElementById("butid")
buttonn.addEventListener('click',function() 
{
var val = inputs.value
var item=document.createElement("li")
item.innerHTML=val
list.appendChild(item)
})


