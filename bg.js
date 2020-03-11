const body = document.querySelector("body");
const numOfImg = 4;



function paintImage(ImgNumber)
{
     const image = new Image();
     image.src = `image/${ImgNumber+1}.jfif`;
     image.classList.add("bgImage");
     body.appendChild(image);
}

function genRandom()
{
    const number = Math.floor(Math.random() * numOfImg);
    return number;
}

function init()
{
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init()