let rigthButton=document.querySelector(".rigthButton");
let rigthInput=document.querySelector(".rigthInput");
let rigthTextArea=document.querySelector(".rigthTextArea");
let question=document.querySelector(".question");
let rigthTitle=document.querySelector(".rigthTitle");
let rigthContentBox=document.querySelector(".rigthContentBox");

rigthButton.addEventListener("click",()=>{
    
   let div=document.createElement("div");
   div.classList.add("margin");
   let h1=document.createElement("h1");
   let p=document.createElement("p");
   h1.innerHTML=rigthInput.value;
   p.innerHTML=rigthTextArea.value;
   div.appendChild(h1);
   div.appendChild(p);
   question.appendChild(div);
   rigthInput.value="";
   rigthTextArea.value="";

});

// new div content
question.addEventListener("click", (event) => {
   if (event.target && event.target.nodeName === 'DIV') {
       let newdiv = document.querySelector(".new-div");
       newdiv.classList.add("dblock");

       let text = document.querySelector(".newText");

       // Clear existing content to avoid duplication
       text.innerHTML = '';

       let righth1 = document.createElement("h2");
       let para = document.createElement("p");

       // Select h1 and p inside the clicked div (event.target)
       let originalH1 = event.target.querySelector("h1");
       let originalP = event.target.querySelector("p");

       // Check if h1 and p exist in the clicked div
       if (originalH1 && originalP) {
           righth1.innerHTML = originalH1.textContent;
           para.innerHTML = originalP.textContent;

           text.appendChild(righth1);
           text.appendChild(para);
       }

      
         rigthContentBox.classList.add("none");
      
   }
});

let rbtn=document.querySelector(".newButton");
let response=document.querySelector(".response");
let rInput=document.querySelector(".newInput");
let rpara=document.querySelector(".newTextArea");
rbtn.addEventListener("click",()=>{
   let dinNew=document.createElement("div");
   let paraNew=document.createElement("p");
   let Heading=document.createElement("h2");
    dinNew.classList.add("responseStyle");
   paraNew.innerHTML=rpara.value;
   Heading.innerHTML=rInput.value;

   dinNew.appendChild(Heading);
   dinNew.appendChild(paraNew);
   response.appendChild(dinNew);
   rInput.value = "";
   rpara.value = "";
});





