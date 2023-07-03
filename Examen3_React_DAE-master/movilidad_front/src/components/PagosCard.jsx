import { useNavigate } from 'react-router-dom';

export function PagosCard({ pagos }) {
    const navigate = useNavigate();

    return (
        <div
            className="card mb-3"
            style={{
                cursor: 'pointer',
                margin: '50px',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
            }}
            onClick={() => {
                navigate(`/PagosPage/${pagos.movilidad_pago_id}`);
            }}
        >
            <div className="card-body">
                <h6 className="card-title">ID: {pagos.movilidad_pago_id}</h6>
                <p className="card-text">Movilidad: {pagos.movilidad}</p>
                <p className="card-text">Forma de Pago: {pagos.forma_pago}</p>
                <p className="card-text">Fecha: {pagos.movilidad_pago_fecha}</p>
                <p className="card-text">Monto: {pagos.movilidad_pago_monto}</p>
            </div>
        </div>
    );
}


