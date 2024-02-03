function createMovieSlider(movies) {
    const slider = document.getElementById('movieSlider');
    slider.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'item';
        movieElement.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">`;
        slider.appendChild(movieElement);
    });

    if ($.fn.slick) {
        $('.center').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            autoplay: false,
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        autoplay: true,
                        autoplaySpeed: 4000,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        autoplay: true,
                        autoplaySpeed: 4000,
                    }
                }
            ]
        });
    }

}

function fetchPopularMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmEzM2JhNmMzNjIxZjIxMDk0ZTI1OTU2OGM3YjU3NCIsInN1YiI6IjY1YmMzYjdmNDU5YWQ2MDE3YTZjZWUzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yzDp_R0UW_E9eYl8H_7AkPvvtsxiyAKrZW-j48Sr5Ls'
        }
    };

    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(data => createMovieSlider(data.results.slice(0, 5)))
        .catch(err => console.error(err));
}
fetchPopularMovies();
