const URLS = ["https://www.youtube.com/embed/Usm9p_sewQ4?si=j8QqdckKlnASo79I", "https://www.youtube.com/embed/ItAru_T2dKs?si=AYHaCCDAnwZdyo4R", "https://www.youtube.com/embed/6B-faA6tjcY?si=kMGE08XDZKNj25Ms"];

const button = document.getElementById('button');
let counter = 0;
const video = document.getElementById('video');

button.addEventListener('click', ()=>{
    function change(indx){
        video.setAttribute('src', URLS[indx]);
    }
    if(counter == 2){
        counter = 0;
        change(counter);
        counter++;
    } else {
        change(counter);
        counter++;
    }
});