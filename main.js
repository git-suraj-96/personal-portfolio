const form = document.querySelector("form");
const btn = document.querySelector(".contact");

btn.addEventListener("click", () =>{
    form.reset();
    alert("Thanks for contacting me");
})