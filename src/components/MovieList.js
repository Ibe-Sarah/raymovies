import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container '>
					<img src={movie.Poster} sizes='100px' width={'100'} height={'200'} alt='movie'></img>
					<div className='overlay inline-block px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'>Add to favourites</div>
				</div>
			))}
		</>
	);
};

export default MovieList;