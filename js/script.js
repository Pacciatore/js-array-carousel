console.log('JS OK!')

const images = ['01', '02', '03', '04', '05'];
console.log(images);
let activeIndex = 0;

const carouselContainer = document.getElementById('carousel-container');
console.log(carouselContainer);

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const imageClass = i === activeIndex ? 'w-100 active' : 'w-100';

    carouselContainer.innerHTML += `<img class="${imageClass}" src="images/${image}.jpg" alt="img-${image}">`;
    console.log(i + carouselContainer.innerHTML);
}


