import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'black' }}>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="btn btn-info m-3 font-weight-bold" style={{ marginLeft: 'auto', color: 'white' }}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/PagosPage" className="btn btn-info m-3 font-weight-bold" style={{ marginLeft: 'auto', color: 'white' }}>Pagos de Movilidades</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/FormasPagos" className="btn btn-info m-3 font-weight-bold" style={{ marginLeft: 'auto', color: 'white' }}>Formas de Pago</Link>
                    </li>
                </ul>
            </div>
            <div className="ml-auto">
                <Link to="/PagosFormPage" className="btn btn-outline-danger mr-2" style={{ color: 'white' }}>Agregar Pago</Link>
                <Link to="/FormasPagosForm" className="btn btn-outline-danger" style={{ color: 'white' }}>Agregar Forma de Pago</Link>
            </div>
        </nav>
    );
}