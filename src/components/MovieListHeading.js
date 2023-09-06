import React from 'react';


const MovieListHeading = (props) => {

	 const handleHeadingClick = () => {
    window.location.reload();
  };
	return (
		<div className='flex flex-col'>
			<h1 className='text' onClick={handleHeadingClick}>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;