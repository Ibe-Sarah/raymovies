import RemoveFavourite from "./RemoveFavourites";
import AddFavourite from "./AddToFavourites";
const FavList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container '>
					<img src={movie.Poster} sizes='100px' width={'100'} height={'200'} alt='movie'></img>

					<div className='overlay inline-block px-3 py-2  font-medium text-white bg-gray-900  shadow-sm opacity-0 tooltip dark:bg-gray-700'  onClick={() => props.handleRemoveFavClick(movie)}>
						
					<RemoveFavourite />
					</div>

				</div>


			))}
		</>
	);
};

export default FavList;