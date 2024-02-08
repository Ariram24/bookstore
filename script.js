var addbtn=document.getElementById("add-pop-button")
var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
var cancel=document.querySelector(".b2")

addbtn.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})

cancel.addEventListener("click",function(){
    overlay.style.display="none"
    popup.style.display="none"
})
//select container,add button,box1,box2,bigbox

var frt=document.querySelector(".container")
var addbutton=document.querySelector(".b1")
var input1=document.getElementById("box1")
var input2=document.getElementById("box2")
var textarea=document.getElementById("bigbox")

addbutton.addEventListener("click",function(event){
   event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontain")
    div.innerHTML=` <h2>${input1.value}</h2>
    <h3>${input2.value}<\h3>
    <P>${bigbox.value}</P>
    <button onclick="start(event)"class="end">Close</button>
    `
    frt.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})


function start(event)
{
     event.target.parentElement.remove()
}
