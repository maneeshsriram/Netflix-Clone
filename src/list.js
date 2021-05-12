const API_KEY = "a5df1fa32b23af685000288153264ea8";


const list = {
    Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    ComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    WesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
}

export default list;
