const ImageElement = document.querySelector(".image-container");

const PreEle = document.getElementById("prev");

const nextEle = document.getElementById("next");

let x=0;
let timer;

function UpdateGallery(){
    ImageElement.style.transform =`perspective(1000px) rotateY(${x}deg)`; 

    timer= setTimeout(()=>{
        x=x+45;
        UpdateGallery();
    },2000)
}

UpdateGallery();

PreEle.addEventListener("click", ()=>{
    x=x+45;
    clearTimeout(timer);
    UpdateGallery();
});

nextEle.addEventListener("click", ()=>{
    x=x-45;
    clearTimeout(timer);
    UpdateGallery();
});