import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import './state.css'
import SearchBox from './search';
import MovieListHeading from './MovieListHeading';
import AddFavourite from './AddToFavourites';
import FavList from './FavList';
import FavListHeading from './FavListHeading';

const State = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [favourites, setFavourites] = useState([]);

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=a8be1f01`;
		// use 'https' so he api can work boh on localhost and hosted platforms

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	const addFavouriteMovie = (movie) => {
		
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
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

	
	return (
		<div className=' movie-app black -mt-28 overflow-y-auto' >

			
            <div className=' flex row search justify-center'>
            <MovieListHeading heading='RayMovies' className='text' />
			<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='flex gap-4 row mt-8'>
            <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} />
            
			</div>
        
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