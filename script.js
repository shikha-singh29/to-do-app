const inputBox = document.getElementById("input-box");
const inputContainer = document.getElementsByClassName("row");
const listContainer = document.getElementById("list-container");
function addTask() {
    if(inputBox.value === ''){
        alert("You have to write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
               
    }
    inputBox.value = "";
    saveTask();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();            
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false);

function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();
let removeText = document.createElement("span");
removeText.innerHTML="\u00d7";
inputContainer.appendChild(removeText);
removeText.addEventListener("click",function(){
    inputBox.value='';
})

