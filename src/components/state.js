import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import './state.css'
import SearchBox from './search';
import MovieListHeading from './MovieListHeading';

const State = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a8be1f01`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	
	return (
		<div className=' movie-app black'>

			
            <div className=' flex row search justify-center'>
            <MovieListHeading heading='RayMovies' className='text' />
			<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='flex gap-4 row mt-8'>
            <MovieList movies={movies} />
            
			</div>
        

		</div>
	);
};

export default State;