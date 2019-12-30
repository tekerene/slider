const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 1;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide(){
   container.animate([{opacity:'0.4'},{opacity:'1'}], {duration:1000,fill:'forwards'});
    if (counter === 4){
        counter =-1;
    }
    counter++;

    container.style.backgroundImage = `url(image/pic${counter}.jpg)`
}
function prevSlide() {
    container.animate([{opacity:'0.4'},{opacity:'1'}], {duration: 1000,fill: 'forwards'});
    if(counter === 0){
        counter = 5;
    }
    counter--;

    container.style.backgroundImage = `url(image/pic${counter}.jpg)`
}