let picsTopic = document.getElementsByTagName("h1")[0].innerText;
picsTopic = picsTopic.toLowerCase();
let picsUrl = `../assets/gallery/${picsTopic}`;
let grid = document.querySelector(".grid");

function getPicsNum() {
    let gridElm = grid.classList[1].split("-")
    let picsNum = gridElm[1]
    picsNum = parseInt(picsNum)
    return picsNum
}

let getImgsList = () => {

    let imagesName = []

    for (let i = 0; i < getPicsNum(); i++) {
        imagesName.push(picsTopic[0].toUpperCase() + (i + 1) + ".jpg")
    }
    return imagesName
}

function insertImg(imgName, imgUrl) {

    let imgClass = imgName.split(".")[0]

    let divImg = document.createElement("img")
    divImg.classList.add(`grid-img`)
    divImg.classList.add(`${imgClass}`)
    divImg.src = `${imgUrl}/${imgName}`
    grid.appendChild(divImg);
}

function onLoad() {
    let images = getImgsList()

    images.forEach((img) => {
        insertImg(img, picsUrl)
    })
}

onLoad()