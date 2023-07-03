import axios from 'axios'

const pagosApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/movilidadPago/"
});
export const getAllPagos =  () => pagosApi.get("/");
export const getPago = (movilidad_pago_id) =>  pagosApi.get(`/${movilidad_pago_id}/`)
export const createPagos = (pagos) => pagosApi.post("/", pagos);
export const deletePagos = (movilidad_pago_id) => pagosApi.delete(`/${movilidad_pago_id}`);
export const updatePagos = (movilidad_pago_id, pagos) => pagosApi.put(`/${movilidad_pago_id}/`, pagos);


const FormaPagosApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/formaPago/"
});
export const getAllformaPagos =  () => FormaPagosApi.get("/");
export const getformaPago = (forma_pago_id) =>  FormaPagosApi.get(`/${forma_pago_id}/`)
export const createformaPagos = (formapago) => FormaPagosApi.post("/", formapago);
export const deleteformaPagos = (forma_pago_id) => FormaPagosApi.delete(`/${forma_pago_id}`);
export const updateformaPagos = (forma_pago_id, formapago) =>FormaPagosApi.put(`/${forma_pago_id}/`, formapago);

