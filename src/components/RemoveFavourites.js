import React from 'react';
import {AiFillHeart} from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa';


const RemoveFavourite = () => {
	return (
		<div className='flex relative'>
			<span className='mr-2 Rem'>Remove from Favourites</span>
			<FaTimes className='absolute remove' style={{color:'white'}}/>
		
		</div>
	);
};

export default RemoveFavourite;