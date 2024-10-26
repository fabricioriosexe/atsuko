import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const projects = [
    {
        title: "Proyecto 1",
        image: "/public/img/proyecto.png",
        link: "/project1",
    },
    {
        title: "Proyecto 2",
        image: "/public/img/proyecto.png",
        link: "/project2",
    },
    {
        title: "Proyecto 3",
        image: "/public/img/proyecto.png",
        link: "/project3",
    },
    {
        title: "Proyecto 4",
        image: "/public/img/proyecto.png",
        link: "/project4",
    },
    {
        title: "Proyecto 5",
        image: "/public/img/proyecto.png",
        link: "/project5",
    },
    {
        title: "Proyecto 6",
        image: "/public/img/proyecto.png",
        link: "/project6",
    },
    {
        title: "Proyecto 7",
        image: "/public/img/proyecto.png",
        link: "/project7",
    },
    // Agrega más proyectos si es necesario
];

function WorkPage() {
    const [activeSection, setActiveSection] = useState("WORK");
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

            {/* Galería de Proyectos */}
            <div className="flex flex-col items-center py-10">
                <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Proyecto 1 ocupa toda la fila superior */}
                    <a
                        href={projects[0].link}
                        className="relative overflow-hidden group col-span-1 md:col-span-2 lg:col-span-3"
                    >
                        <img
                            src={projects[0].image}
                            alt={projects[0].title}
                            className="w-full h-96 object-cover transform transition duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition duration-500">
                            <span className="text-lg font-bold uppercase tracking-widest">{projects[0].title}</span>
                        </div>
                    </a>

                    {/* Otros proyectos en una cuadrícula debajo */}
                    {projects.slice(1).map((project, index) => (
                        <a
                            href={project.link}
                            key={index + 1}
                            className="relative overflow-hidden group"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                                <span className="text-lg font-bold uppercase tracking-widest">{project.title}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WorkPage;
