import React, { useState } from 'react';
import AddFavourite from './AddToFavourites';

const Hotpicks = (props) => {

    const [hot, setHot]= useState([
        {
            "Title": "Star Wars: Episode V - The Empire Strikes Back",
            "Year": "1980",
            "imdbID": "tt0080684",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        }

    ])

    
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

export default Hotpicks;

