const darkmodebutton = document.querySelector(".button")
const containerItem = document.querySelectorAll(".container-item");
const body = document.body;

darkmodebutton.addEventListener("click", darkmode);

function darkmode(){
    body.classList.toggle("darkmode")

    containerItem.forEach(i => {
        i.classList.toggle("container-dark");
});
}
