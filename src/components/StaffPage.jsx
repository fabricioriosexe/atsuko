import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 

const staffMembers = [
    {
        name: "Staff 1",
        position: "Cargo 1",
        image: "/img/proyecto.png", 
    },
    {
        name: "Staff 2",
        position: "Cargo 2",
        image: "/img/proyecto.png", 
    },
    {
        name: "Staff 3",
        position: "Cargo 3",
        image: "/img/proyecto.png", 
    },
    {
        name: "Staff 4",
        position: "Cargo 4",
        image: "/img/proyecto.png", 
    },
];

function StaffPage() {
    const [activeSection, setActiveSection] = useState("STAFF"); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-black text-white min-h-screen relative">
            {/* Header */}
            <header className="flex justify-between items-center py-4 px-4 ">
                <Link to="/">
                    <img
                        src="/img/Atsuko.png"
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

            {/* Galería de Staff */}
            <div className="flex flex-col items-center py-10">
                <h2 className="text-6xl font-bold tracking-wide mb-10 text-custom-red">STAFF</h2>
                <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
                    {staffMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <div className="text-center mt-2">
                                <span className="block text-lg font-bold">{member.name}</span>
                                <span className="block text-sm">{member.position}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StaffPage;
