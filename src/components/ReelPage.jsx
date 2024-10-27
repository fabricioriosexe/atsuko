import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ReelPage() {
    const [activeSection, setActiveSection] = useState("REEL");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-black text-white min-h-screen relative">
            {/* Header */}
            <header className="flex justify-between items-center py-4 px-4 ">
                <Link to="/">
                    <img
                        src="/img/Atsuko2.png"
                        alt="Atsuko Logo"
                        className="w-24 md:w-28 lg:w-32 xl:w-36" // Ajusta los tamaños aquí
                    />
                </Link>
                
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>

                {/* Menú para pantallas grandes */}
                <nav className={`hidden md:flex space-x-8 text-lg uppercase `}>
                    {["WORK", "REEL", "STAFF", "CONTACT"].map((section) => (
                        <Link
                            key={section}
                            to={`/${section.toLowerCase()}`} // Cambiar a la ruta correspondiente
                            className={`hover:text-custom-red ${activeSection === section ? "underline" : ""}`}
                            onClick={() => {
                                setActiveSection(section);
                            }}
                        >
                            {section}
                        </Link>
                    ))}
                </nav>
            </header>

            {/* Menú hamburguesa para pantallas pequeñas */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-black p-4 z-10 flex flex-col items-center ">
                    {["WORK", "REEL", "STAFF", "CONTACT"].map((section) => (
                        <Link
                            key={section}
                            to={`/${section.toLowerCase()}`} // Cambiar a la ruta correspondiente
                            className={`block py-2 hover:text-custom-red ${activeSection === section ? "underline" : ""}`}
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

            {/* Video central */}
            <div className="flex items-center justify-center py-10">
                <video 
                    className="w-3/4 h-64 object-cover" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src="/path/to/your/reel-video.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default ReelPage;
