import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const directors = [
    {
        name: "Director 1",
        image: "/img/proyecto.png", 
        link: "/director1",
    },
    {
        name: "Director 2",
        image: "/img/proyecto.png", 
        link: "/director2",
    },
    {
        name: "Director 3",
        image: "/img/proyecto.png", 
        link: "/director3",
    },
    {
        name: "Director 4",
        image: "/img/proyecto.png", 
        link: "/director4",
    },
];

function DirectoresPages() {
    const [activeSection, setActiveSection] = useState("DIRECTORES");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-black text-white min-h-screen relative">
            {/* Header */}
            <header className="flex justify-between items-center py-4 px-4">
                <Link to="/" className="text-2xl font-bold">Atsuko</Link>
                
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>

                {/* Menú para pantallas grandes */}
                <nav className={`hidden md:flex space-x-8 text-lg uppercase`}>
                    {["WORK", "REEL", "DIRECTORES", "STAFF", "CONTACT"].map((section) => (
                        <Link
                            key={section}
                            to={`/${section.toLowerCase()}`} // Cambiar a la ruta correspondiente
                            className={`hover:text-gray-400 ${activeSection === section ? "underline" : ""}`}
                            onClick={() => setActiveSection(section)}
                        >
                            {section}
                        </Link>
                    ))}
                </nav>
            </header>

            {/* Menú hamburguesa para pantallas pequeñas */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-black p-4 z-10 flex flex-col items-center">
                    {["WORK", "REEL", "DIRECTORES", "STAFF", "CONTACT"].map((section) => (
                        <Link
                            key={section}
                            to={`/${section.toLowerCase()}`} // Cambiar a la ruta correspondiente
                            className={`block py-2 hover:text-gray-400 ${activeSection === section ? "underline" : ""}`}
                            onClick={() => {
                                setActiveSection(section);
                                setIsMenuOpen(false); // Cierra el menú al hacer clic en un enlace
                            }}
                        >
                            {section}
                        </Link>
                    ))}
                </div>
            )}

            {/* Galería de Directores */}
            <div className="flex flex-col items-center py-10">
                <h2 className="text-6xl font-bold tracking-wide mb-10">DIRECTORES</h2>
                <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {directors.map((director, index) => (
                        <Link
                            key={index}
                            to={director.link}
                            className="relative overflow-hidden group"
                        >
                            <img
                                src={director.image}
                                alt={director.name}
                                className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110" 
                                style={{ aspectRatio: '1 / 1' }} // Mantiene las imágenes cuadradas
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                                <span className="text-lg font-bold uppercase tracking-widest">{director.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DirectoresPages;
