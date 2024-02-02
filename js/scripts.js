//Componentizando alguns elementos na página
$(document).ready(function () {
    $("#headerComponent").load("../assets/header.html");
    $("#mainContent").load("../assets/main.html");
    $("#footerComponent").load("../assets/footer.html");
});

//Carousel
document.addEventListener('DOMContentLoaded', (event) => {
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryControls = ['previous', 'next'];
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    class Carousel {
        constructor(container, items, controls) {
            this.carouselContainer = container;
            this.carouselControls = controls;
            this.carouselArray = [...items];
        }
    
        updateGallery(){
            this.carouselArray.forEach(el => {
                el.classList.remove('gallery-item-1');
                el.classList.remove('gallery-item-2');
                el.classList.remove('gallery-item-3');
                el.classList.remove('gallery-item-4');
                el.classList.remove('gallery-item-5');
            });
    
            this.carouselArray.slice(0, 5).forEach((el, i) => {
                el.classList.add(`gallery-item-${i+1}`);
            });
        }
    
        setCurrentState(direction){
            if (direction.classList.contains('gallery-controls-previous')) {
                this.carouselArray.unshift(this.carouselArray.pop());
            } else {
                this.carouselArray.push(this.carouselArray.shift());
            }        
            this.updateGallery();
        }
    
        setControls() {
            this.carouselControls.forEach(control => {
                galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
                document.querySelector(`.gallery-controls-${control}`).innerText = control;
            });
        }
    
        useControls(){
            const triggers = [...galleryControlsContainer.childNodes];
            triggers.forEach(control => {
                control.addEventListener('click', e => {
                    e.preventDefault();
                    this.setCurrentState(control);
                });
            });
        }
    }
    
    const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
    exampleCarousel.setControls();
    exampleCarousel.useControls();    
});


//Slider
/*
document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const carousel = document.querySelector('.carousel-inner');
    let scrollAmount = 0;

    const scrollCarousel = (offset) => {
        scrollAmount += offset;
        carousel.style.transform = `translateX(${scrollAmount}px)`;
    };

    prevButton.addEventListener('click', () => scrollCarousel(100));
    nextButton.addEventListener('click', () => scrollCarousel(-100));

    // Inicialização e lógica para mostrar/esconder botões baseado na posição do scroll
    // e na quantidade de slides podem ser adicionadas aqui.
});
*/