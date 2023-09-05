import React from 'react';
import {AiFillHeart} from 'react-icons/ai'


const AddFavourite = () => {
	return (
		<div className='flex relative'>
			<span className='mr-2 fav'>Add to Favourites</span>
			<AiFillHeart className='absolute right' style={{color:'red'}}/>
		
		</div>
	);
};

export default AddFavourite;