import { useEffect, useState } from "react";
import { getAllPagos } from "../api/pagos.api";
import { PagosCard } from "./PagosCard"

export function PagosList() {
    const [pagos, setPagos] = useState([]);

    useEffect(() => {
        async function loadPagos() {
            const res = await getAllPagos();
            setPagos(res.data);
        }
        loadPagos();
    }, []);

    return <div className='table-responsive'>
        {pagos.map(pagos => (
            <PagosCard key={pagos.movilidad_pago_id} pagos={pagos} />
        ))}
    </div>
}