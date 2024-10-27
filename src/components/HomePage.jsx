import React from 'react'; 
import { Link } from 'react-router-dom'; 

function HomePage() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="text-6xl md:text-9xl font-bold tracking-wide mb-4 text-custom-red">Atsuko</h1> 
            <p className=" text-lg tracking-widest mb-10">ultimo trabajo</p>

            <div className="w-full max-w-3xl h-64 bg-black border border-gray-500 flex items-center justify-center mb-10">
                {/* Contenedor para el video, con un borde gris */}
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src="/path/to/video.mp4" type="video/mp4" />
                    {/* Video que se reproduce automáticamente, en bucle y en silencio */}
                </video>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-10 md:space-y-0 space-y-4 text-lg uppercase tracking-widest items-center ">
                {/* Menú inferior, con espacios entre elementos y texto en mayúsculas */}
                <Link to="/work" className="hover:text-gray-400">Work</Link>
                <Link to="/reel" className="hover:text-gray-400">Reel</Link>
                <Link to="/directores" className="hover:text-gray-400">Directors</Link>
                <Link to="/staff" className="hover:text-gray-400">Staff</Link>
                <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </div>
        </div>
    );
}

export default HomePage;
