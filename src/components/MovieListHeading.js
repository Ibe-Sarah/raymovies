import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='flex flex-col'>
			<h1 className='text'>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;