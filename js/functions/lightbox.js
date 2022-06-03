const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);
const clsBtn = document.createElement("span")
clsBtn.className = "mdi mdi-close"
lightbox.appendChild(clsBtn)

let imgs = document.querySelectorAll("img")

imgs.forEach(image => {
    image.addEventListener("click", e => {
        lightbox.classList.add("lightbox-active")
        let img = document.createElement("img")
        img.src = image.src
        lightbox.appendChild(img)
    })
})

function close() {
    lightbox.classList.remove("lightbox-active")
    lightbox.removeChild(lightbox.lastChild)
}

clsBtn.addEventListener("click", close)
