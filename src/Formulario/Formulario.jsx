export function Formulario() {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                            <i class="bi bi-person-plus-fill"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellidos"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombres"
                            />
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="edad"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="nacimiento"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="documento"
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="correo"
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Selecciona una opcion</option>
                                <option value="1">Medio pollo + papas + Gaseosa</option>
                                <option value="2">Ajiaco Santafereño</option>
                                <option value="3">Alitas de pollo BBQ</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                @
                            </span>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Selecciona una opcion</option>
                                <option value="1">Clase de Tango</option>
                                <option value="2">Clase de champeta</option>
                                <option value="3">Clase de Merengue</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button className="btn btn-primary w-100 my-3">ENVIAR</button>
                <button className="btn btn-outline-primary w-50 mx-auto d-block">ENVIAR</button>
            </form>
        </>
    )
}
