import React from "react";

export const Modulo = ({ nombre, precio, stock, imagen, categoria }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0">

                {/* Imagen */}
                <img
                    src={imagen}
                    className="card-img-top"
                    alt={nombre}
                    style={{
                        height: "220px",
                        objectFit: "cover"
                    }}
                />

                {/* Contenido */}
                <div className="card-body d-flex flex-column">

                    <div className="d-flex justify-content-between align-items-start">
                        <h5 className="card-title">{nombre}</h5>

                        <span className={`badge ${stock === "En stock" ? "bg-success" : "bg-danger"}`}>
                            {stock}
                        </span>
                    </div>

                    <p className="text-muted mb-2">
                        Categoría: {categoria}
                    </p>

                    <h5 className="fw-bold">
                        COP ${precio}
                    </h5>

                    {/* Botones abajo */}
                    <div className="mt-auto pt-3 d-flex justify-content-between">
                        <button className="btn btn-outline-primary btn-sm">
                            <i className="bi bi-pencil"></i> Editar
                        </button>

                        <button className="btn btn-outline-danger btn-sm">
                            <i className="bi bi-trash"></i> Eliminar
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export const Content = () => {
    return (
        <div className="container border p-3">
            <div className="row">

                {/* 🟦 2/3 IZQUIERDA */}
                <div className="col-12 col-lg-8">
                    <div className="row">
                        <Modulo nombre="Cosa 1" precio="19000" stock="En stock" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqkLVQB0ARK8oi9YI9O71eQHEOwbVyEWGFA&s" />
                        <Modulo nombre="Cosa 2" precio="25000" stock="En stock" imagen="https://www.kalley.com.co/medias/7705946478533-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0NzMzNnxpbWFnZS93ZWJwfGFEQTVMMmd4TkM4eE5ETTJOakV5T1RVMU16UXpPQzgzTnpBMU9UUTJORGM0TlRNelh6QXdNVjh4TkRBd1YzZ3hOREF3U0F8OTUwOTg1N2IwNjcxZWZiNzBhZTc1ZmZhNTU0M2JlMDRiMGIyN2VkYzFiY2FiYzA4YzMyZWUyMGZjMzU3YTRkMQ" />
                        <Modulo nombre="Cosa 3" precio="30000" stock="Agotado" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqkLVQB0ARK8oi9YI9O71eQHEOwbVyEWGFA&s"  />
                        <Modulo nombre="Cosa 4" precio="18000" stock="En stock" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqkLVQB0ARK8oi9YI9O71eQHEOwbVyEWGFA&s"  />
                        <Modulo nombre="Cosa 5" precio="22000" stock="En stock" imagen="https://www.kalley.com.co/medias/7705946478533-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0NzMzNnxpbWFnZS93ZWJwfGFEQTVMMmd4TkM4eE5ETTJOakV5T1RVMU16UXpPQzgzTnpBMU9UUTJORGM0TlRNelh6QXdNVjh4TkRBd1YzZ3hOREF3U0F8OTUwOTg1N2IwNjcxZWZiNzBhZTc1ZmZhNTU0M2JlMDRiMGIyN2VkYzFiY2FiYzA4YzMyZWUyMGZjMzU3YTRkMQ" />
                        <Modulo nombre="Cosa 6" precio="15000" stock="En stock" imagen="https://www.kalley.com.co/medias/7705946478533-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0NzMzNnxpbWFnZS93ZWJwfGFEQTVMMmd4TkM4eE5ETTJOakV5T1RVMU16UXpPQzgzTnpBMU9UUTJORGM0TlRNelh6QXdNVjh4TkRBd1YzZ3hOREF3U0F8OTUwOTg1N2IwNjcxZWZiNzBhZTc1ZmZhNTU0M2JlMDRiMGIyN2VkYzFiY2FiYzA4YzMyZWUyMGZjMzU3YTRkMQ" />
                    </div>
                </div>

                {/* 🟨 1/3 DERECHA */}
                <div className="col-12 col-lg-4">
                    <div className="border p-3 rounded">
                        <h1 className="text-center">Agregar producto</h1>
                        <br />
                        <label className="label-form" >Nombre del producto:</label> <br />
                        <input type="text"
                        id="nombreProducto" 
                        className="form-control" 
                        required />
                    

                        <div className="row">
                            <div className="col-6">
                                <label className="form-label">Precio (COP):</label>
                                <input
                                    type="number"
                                    id="precioProducto"
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="col-6">
                                <label className="form-label">Stock</label>
                                <input
                                    type="number"
                                    id="stockProducto"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        <label className="label-form">Categoria</label> <br />
                        <select className="form-select" aria-label="Default select example">
                        <option defaultValue>Selecciona una categoria</option>
                            <option value="1">Cámaras</option>
                            <option value="2">Audifonos & Diademas</option>
                            <option value="3">Periféricos</option>
                        </select>

                        <label className="label-form">URL de la imagen</label> <br />
                        <input type="text" 
                        id="urlProducto" 
                        className="form-control"  
                        required/>

                        <label className="label-form">Descripción: </label> <br />
                        <textarea
                            id="descripcionProducto"
                            className="form-control"
                            rows="4"
                            required>
                        </textarea>
                        
                        <br />

                        <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-success" id="agregarProducto"> <i class="bi bi-cart-check"></i> Agregar al catálogo</button>
                        <button className="btn btn-warning" id="editarProducto"> <i class="bi bi-cart-check"></i> Limpiar</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}