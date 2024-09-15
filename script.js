const nodesConteiner =document.querySelector(".nodes-container");
const creatbtn =document.querySelector(".btn");
let nodes =document.querySelectorAll(".input-box")

function shownodes() {
  nodesConteiner.innerHTML = localStorage.getItem("notes");

}
shownodes()
function updateStorage() {
  localStorage.setItem("notes", nodesConteiner.innerHTML);
}

creatbtn.addEventListener("click" , ()=>{
  let inputbox = document.createElement("p");
  let img =document.createElement("img");
  inputbox.className = "input-box"
  inputbox.setAttribute("contenteditable" ,"true");
  img.src ="images/delete.png";
  nodesConteiner.appendChild(inputbox).appendChild(img);
});

nodesConteiner.addEventListener("click", (e)=>{
  if(e.target.tagName ==="IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }
  else if(e.target.tagName === "p"){
    nodes =document.querySelectorAll(".input-box");
    nodes.forEach(nt => {
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  
  }
})