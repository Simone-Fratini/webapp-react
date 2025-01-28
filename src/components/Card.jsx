import { Link } from "react-router-dom";

const apiImageUrl = import.meta.env.VITE_FILM_IMG_URL;

export default function Card({ film }) {
    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl scale-[.99] hover:scale-100 hover:z-10 transition-all duration-300 [aspect-ratio:9/16] md:[aspect-ratio:3/4] lg:[aspect-ratio:1/2] xl:[aspect-ratio:3/4]">
            <div className="h-1/2 lg:h-2/5 xl:h-1/2 bg-blue-50">
                <img
                    src={`${apiImageUrl}/${film.image}`}
                    className="w-full h-full object-contain"
                    alt={film.title}
                />
            </div>
            <div className="p-3 grow flex flex-col gap-3">
                <div className="h-2/3">
                    <h3 title={film.title} className="text-2xl font-semibold text-gray-800 break-all line-clamp-1">
                        {film.title}
                    </h3>
                    <h4 className="text-lg text-gray-600 italic mt-1">
                        {film.author}
                    </h4>
                    <p className="text-gray-700 my-3 text-sm line-clamp-2">
                        {film.abstract}
                    </p>
                </div>
                <div>
                    <Link to={`/home/${film.id}`} className="block">
                        <button className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-900 rounded-xl font-medium transition-colors duration-200">
                            Dettagli
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
