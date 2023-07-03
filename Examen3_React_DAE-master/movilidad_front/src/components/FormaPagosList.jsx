import { useEffect, useState } from "react";
import { getAllformaPagos } from "../api/pagos.api";
import { FormaPagosCard } from "./FormaPagosCard";

export function FormaPagosList() {
    const [formapago, setformaPagos] = useState([]);
    // actualiza los datos en la pag. 
    useEffect(() => {
        async function loadformaPagos() {
            const res = await getAllformaPagos();
            setformaPagos(res.data);
        }
        loadformaPagos();
    }, []);

    return <div>
        {formapago.map(formapago => (
            <FormaPagosCard key={formapago.forma_pago_id} formapago={formapago} />
        ))}
    </div>
}