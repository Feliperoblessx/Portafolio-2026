
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import "./navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: "Inicio", path: "/", end: true },
        { name: "Sobre mí", path: "/sobre-mi" },
        { name: "Proyectos", path: "/proyectos" },
        { name: "Contáctame", path: "/contacto" },
    ];

    return (
        <header className="navbar">

            <div className="navbar-logo">
                <img
                    src={`${import.meta.env.BASE_URL}images/logo.png`}
                    alt="Logo de Felipe"
                />
            </div>

            {/* BOTÓN PARA CELULARES */}
            <button
                className="navbar-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir o cerrar menú"
                aria-expanded={menuOpen}
            >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* ENLACES DE NAVEGACIÓN */}
            <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>

                {links.map((link) => {

                    const isProjectPage =
                        link.path === "/proyectos" &&
                        location.pathname.startsWith("/proyecto");

                    return (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.end}
                            className={({ isActive }) =>
                                `navbar-link ${isActive || isProjectPage ? "active" : ""
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    );
                })}

            </nav>

        </header>
    );
}

export default Navbar;
