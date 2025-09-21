const form = document.querySelector("form");
const btn = document.querySelector(".contact");

btn.addEventListener("click", () =>{
    form.reset();
    alert("Thanks for contacting me");

});


const spantag = document.querySelector("#animated-text");
const text = "Frontend Developer";
let index = 1;
function print(){
  if(index > text.length){
    index = 1;
  }
  setTimeout(()=>{
    spantag.innerHTML = text.slice(0, index);
    index++;

  }, 100);
}
;

setInterval(() => {
  print();
},300);
