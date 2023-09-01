import {Link} from 'react-router-dom';
import {BiSolidCameraMovie} from 'react-icons/bi'

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <BiSolidCameraMovie
                    alt=""
                    className="h-8 w-8"
                   />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium navy hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}