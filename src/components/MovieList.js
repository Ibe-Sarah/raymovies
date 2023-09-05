import React from 'react';
import AddFavourite from './AddToFavourites';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container '>
					<img src={movie.Poster} sizes='100px' width={'100'} height={'200'} alt='movie'></img>

					<div className='overlay inline-block px-3 py-2  font-medium text-white bg-gray-900  shadow-sm opacity-0 tooltip dark:bg-gray-700'  onClick={() => props.handleFavouritesClick(movie)}>
						
					<AddFavourite />
					</div>

				</div>

			))}
		</>
	);
};

export default MovieList;

