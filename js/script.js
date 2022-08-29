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

const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click',
    function () {
        console.log('click');

        if (activeIndex < images.length - 1) {
            carouselContainer.innerHTML = '';
            activeIndex++;

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const imageClass = i === activeIndex ? 'w-100 active' : 'w-100';

                carouselContainer.innerHTML += `<img class="${imageClass}" src="images/${image}.jpg" alt="img-${image}">`;
            }
        } else if (activeIndex === images.length - 1) {
            activeIndex = 0;
            console.log('after index ' + activeIndex);

            carouselContainer.innerHTML = '';

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const imageClass = i === activeIndex ? 'w-100 active' : 'w-100';

                carouselContainer.innerHTML += `<img class="${imageClass}" src="images/${image}.jpg" alt="img-${image}">`;
            }

        }

    })

previousButton.addEventListener('click',
    function () {
        console.log('click');
        console.log('before index ' + activeIndex);

        if (activeIndex > 0) {
            carouselContainer.innerHTML = '';
            activeIndex--;

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const imageClass = i === activeIndex ? 'w-100 active' : 'w-100';

                carouselContainer.innerHTML += `<img class="${imageClass}" src="images/${image}.jpg" alt="img-${image}">`;
            }
        } else if (activeIndex === 0) {
            activeIndex = images.length;
            console.log('after index ' + activeIndex);

            carouselContainer.innerHTML = '';
            activeIndex--;

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const imageClass = i === activeIndex ? 'w-100 active' : 'w-100';

                carouselContainer.innerHTML += `<img class="${imageClass}" src="images/${image}.jpg" alt="img-${image}">`;
            }

        }

    })

