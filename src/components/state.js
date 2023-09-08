import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import './state.css'
import SearchBox from './search';
import MovieListHeading from './MovieListHeading';
import AddFavourite from './AddToFavourites';
import FavList from './FavList';
import FavListHeading from './FavListHeading';
import Hotpicks from './hotpicks';



const State = () => {
	const [movies, setMovies] = useState([
	{ "Title": "Young Sheldon",
	"Year": "2017",
	"imdbID": "tt6226232",
	"Type": "movie",
	"Poster": "https://m.media-amazon.com/images/M/MV5BZDg3MGNhYjItZGU2Yi00MzU4LWE4NGUtYjA2OTVjNGUyMjE4XkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SX300.jpg"
},
{
	"Title": "Star Wars: Episode V - The Empire Strikes Back",
	"Year": "1980",
	"imdbID": "tt0080684",
	"Type": "movie",
	"Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
	"Title": "Star Wars: Episode VI - Return of the Jedi",
	"Year": "1983",
	"imdbID": "tt0086190",
	"Type": "movie",
	"Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},

	{
		"Title": "Ginny & Gerogia",
		"Year": "2021",
		"imdbID": "tt10813940",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2ZWFlNmEtNWYyYy00Yjk1LWIxMTEtMWVkM2NlMTEzOGI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"}
	

]);



const [hot, setHot]= useState([
	{
		"Title": "Everybody Hates Chris",
		"Year": "2005–2009",
		"imdbID": "tt0460637",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWMxZjQ0MjgtOTVjMC00OGI5LThjYTAtYzg3ZDNjYmNlMzk5XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
	},


	{
		"Title": "Vikings",
		"Year": "2013–2020",
		"imdbID": "tt2306299",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
	},

	{
		"Title": "The Secret Life of Bees",
		"Year": "2008",
		"imdbID": "tt0416212",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTgzNDIzMTM2OV5BMl5BanBnXkFtZTcwMTQzNTE4MQ@@._V1_SX300.jpg"
	},

	{
		"Title": "Life",
		"Year": "2017",
		"imdbID": "tt5442430",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzAwMmQxNTctYjVmYi00MDdlLWEzMWUtOTE5NTRiNDhhNjI2L2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
	},

	{
		"Title": "Gilmore Girls",
		"Year": "2000-2007",
		"imdbID": "tt0238784",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ3NDA1ZWYtYjBmMC00NmJjLWI1NjgtYjg2NDhmMTY2YWQ4XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg"
	}

])


	const [searchValue, setSearchValue] = useState('');
	const [favourites, setFavourites] = useState([

		{
			"Title": "Life",
			"Year": "2017",
			"imdbID": "tt5442430",
			"Type": "movie",
			"Poster": "https://m.media-amazon.com/images/M/MV5BMzAwMmQxNTctYjVmYi00MDdlLWEzMWUtOTE5NTRiNDhhNjI2L2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
		},

		{ "Title": "Young Sheldon",
		"Year": "2017",
		"imdbID": "tt6226232",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDg3MGNhYjItZGU2Yi00MzU4LWE4NGUtYjA2OTVjNGUyMjE4XkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SX300.jpg"
	},

	{ "Title": "The 100",
	"Year": "2014–2020",
	"imdbID": "tt2661044",
	"Type": "movie",
	"Poster": "https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_SX300.jpg"
},

{ "Title": "Avatar",
	"Year": "2009",
	"imdbID": "tt0499549",
	"Type": "movie",
	"Poster": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
},

{ "Title": "The Good Doctor",
	"Year": "2017",
	"imdbID": "tt6470478",
	"Type": "movie",
	"Poster":"https://m.media-amazon.com/images/M/MV5BMTViMDJlYzEtOTUxNi00ZTU5LWI5MTYtMGViNTQ4NTVkYTMyXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_SX300.jpg"
},

	]);

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=a8be1f01`;
		// use 'https' so the api can work both on localhost and hosted platforms

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	



	const addFavouriteMovie = (movie) => {
		// Check if the movie is already in favorites
		const isAlreadyFavorite = favourites.some((favMovie) => favMovie.imdbID === movie.imdbID);
	  
		if (!isAlreadyFavorite) {
		  const newFavouriteList = [...favourites, movie];
		  setFavourites(newFavouriteList);
		  localStorage.setItem('favoriteMovies', JSON.stringify(newFavouriteList));
		} else {
		  alert('Movie is already in favorites');
		}
	  };
	  
	  const loadFavoriteMoviesFromLocalStorage = () => {
		const storedFavorites = localStorage.getItem('favoriteMovies');
		if (storedFavorites) {
		  setFavourites(JSON.parse(storedFavorites));
		}
	  };
	  



	
	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		loadFavoriteMoviesFromLocalStorage();
	  }, []);
	
	//   used to call loadFavoriteMoviesFromLocalStorage when the component initializes to load the favorites from local storage initially. The empty dependency array ([]) ensures that this effect runs only once when the component mounts. This way, your favorite movies will be loaded from local storage when the component first renders.
	
	return (
		<div className=' movie-app black -mt-28 overflow-y-auto' >

			{/* search movies */}
            <div className=' flex row search justify-center'>
            <MovieListHeading heading='RayMovies' className='text' />
			<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='flex gap-4 row mt-8'>
            <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} />
            
			</div>
        
		

			{/* hot picks */}

			<div className=' flex row search justify-center'>
            <FavListHeading heading='Hot picks' className='favtext' />
			
            </div>
		
		<div className='flex gap-4 row mt-8'>
            <Hotpicks movies={hot}  handleFavouritesClick={addFavouriteMovie}/>
            </div>

			{/* favourites */}
            <div className=' flex row search justify-center'>
            <FavListHeading heading='My Favourites' className='favtext' />
			
            </div>

			<div className='flex gap-4 row mt-8'>
            <FavList movies={favourites}  handleRemoveFavClick={removeFavouriteMovie} />
            
			</div>
		</div>
	);
};

export default State;