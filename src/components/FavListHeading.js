import React from 'react';

const FavListHeading = (props) => {
	return (
		<div className='flex flex-col'>
			<h1 className='favtext'>{props.heading}</h1>
		</div>
	);
};

export default FavListHeading;