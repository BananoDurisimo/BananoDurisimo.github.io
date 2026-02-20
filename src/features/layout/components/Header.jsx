import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="container py-3 d-flex justify-content-between align-items-center bg-dark text-white rounded">

            <div>
                <h2 className="fw-bold mb-1">Carrito de Compras</h2>
                <p className="mb-0 small">
                    Maquetación en Bootstrap para futura implementación en React
                </p>
            </div>

            {/* Navegación */}
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink className="nav-link text-white px-3 rounded" to="/">
                        Inicio
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-white px-3 rounded" to="/articles">
                        Artículos
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-white px-3 rounded" to="/props">
                        Props
                    </NavLink>
                </li>
            </ul>

            {/* Buscador */}
            <div className="d-flex gap-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar producto..."
                />
                <button className="btn btn-primary">
                    <i className="bi bi-search"></i>
                </button>
            </div>

        </header>
    );
};