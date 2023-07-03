import { useNavigate } from 'react-router-dom';

export function FormaPagosCard({ formapago }) {
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
                navigate(`/FormasPagos/${formapago.forma_pago_id}`);
            }}
        >
            <div className="card-body">
                <h6 className="card-title">ID: {formapago.forma_pago_id}</h6>
                <p className="card-text">Forma de Pago: {formapago.forma_pago_nombre}</p>
                <p className="card-text">Referencia: {formapago.forma_pago_referencia}</p>
            </div>
        </div>
    );
}
