//Componentizando alguns elementos na página
$(document).ready(function () {
    $("#headerComponent").load("../assets/header.html");
    $("#mainContent").load("../assets/main.html");
    $("#footerComponent").load("../assets/footer.html");
});

//Carousel
$(document).ready(function () {
    $('#myCarousel').on('slid.bs.carousel', function () {
        var items = $('.carousel-item');
        var activeItem = $('.carousel-item.active');
        var activeIndex = items.index(activeItem);
        var totalItems = items.length;

        items.removeClass('active-middle').css('opacity', '0.5'); // Reset opacidade
        if (activeIndex === 0) { // Primeiro item
            $(items[totalItems - 1]).css('opacity', '0.5');
            $(items[1]).css('opacity', '0.5');
        } else if (activeIndex === totalItems - 1) { // Último item
            $(items[0]).css('opacity', '0.5');
            $(items[activeIndex - 1]).css('opacity', '0.5');
        } else {
            $(items[activeIndex - 1]).css('opacity', '0.5');
            $(items[activeIndex + 1]).css('opacity', '0.5');
        }

        activeItem.css('opacity', '1'); // Aumenta opacidade do item ativo
    });
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