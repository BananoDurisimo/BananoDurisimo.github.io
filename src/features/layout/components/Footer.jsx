import React from "react";

export const Footer = () => {
    return (
        <div className="container d-flex justify-content-between align-items-center mt-5 bg-dark text-white p-3 rounded">
            <div>Vicente Rios © Carrito de Compras</div>

            <div className="d-flex gap-3">
                
                <a href="#" className="text-decoration-none "><i class="bi bi-info-square"></i> Ayuda </a>

                <a href="#" className="text-decoration-none"><i class="bi bi-exclamation-circle-fill"></i> Políticas </a>
            </div>
        </div>
    )
}