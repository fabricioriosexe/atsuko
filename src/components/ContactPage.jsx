import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

// Importar los íconos SVG
/* import { ReactComponent as EmailIcon } from '../public/icons/emailIcon.svg';
import { ReactComponent as InstagramIcon } from '../public/icons/instagramIcon.svg'; */

function ContactPage() {
    const [activeSection, setActiveSection] = useState("CONTACT");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col relative">
            {/* Contenedor de la imagen de fondo */}
            <div className="absolute inset-0">
                <div 
                    className="w-full h-full bg-center bg-cover opacity-25 bg-no-repeat" 
                    style={{ 
                        backgroundImage: 'url("/img/logo1.png")', 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                </div>
            </div>

            {/* Header */}
            <header className="flex justify-between items-center py-4 px-4 relative z-10">
                <Link to="/" className="text-2xl font-bold">Atsuko</Link>
                
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>

                {/* Menú para pantallas grandes */}
                <nav className={`hidden md:flex space-x-8 text-lg uppercase`}>
                    {["WORK", "REEL", "STAFF", "CONTACT"].map((section) => (
                        <Link
                            key={section}
                            to={`/${section.toLowerCase()}`}
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
                    {["WORK", "REEL", "STAFF", "CONTACT"].map((section) => (
                        <Link
                            key={section}
                            to={`/${section.toLowerCase()}`}
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

            {/* Contenido del ContactPage */}
            <div className="relative flex-1 flex flex-col justify-center items-center md:flex-row">
                {/* Información de contacto centrada */}
                <div className="relative z-10 flex flex-col justify-center items-center p-4 w-full md:w-1/3 text-center">
                    <h2 className="text-6xl font-bold mb-4">Contact</h2>

                    {/* Íconos de contacto */}
                    <div className="text-lg mb-2 flex items-center space-x-4 tracking-widest">
                        <img src="/icons/emailIcon.svg" alt="Email Icon" className="w-8 h-8" />
                        <span>agenciaatsuko@gmail.com</span>
                    </div>
                    <div className="text-lg mb-2 flex items-center space-x-4 tracking-widest">
                        <img src="/icons/instagramIcon.svg" alt="Instagram Icon" className="w-8 h-8" />
                        <a
                            href="https://www.instagram.com/atsuko.oficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-white hover:underline"
                        >
                            @atsuko.oficial
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
