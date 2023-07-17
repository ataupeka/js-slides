const back = document.querySelector(".back");
const next = document.querySelector(".next");

const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg"]
let i = 0;
next.addEventListener("click", ()=> {
    i++;
    if (i> photos.length-1){
        i=0;
    }
    document.querySelector(".pictures").src=photos[i];
})
back.addEventListener("click",() =>{
    i--;
    if(i<0){
        i = photos.length-1;
    }
    document.querySelector(".pictures").src = photos [i];

})