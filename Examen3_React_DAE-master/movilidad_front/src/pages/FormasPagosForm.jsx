import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createformaPagos, deleteformaPagos, updateformaPagos, getformaPago } from '../api/pagos.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function FormasPagosForm() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.forma_pago_id) {
            await updateformaPagos(params.forma_pago_id, data);
            toast.success('forma de pago actualizado', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            });
        } else {
            await createformaPagos(data);
            toast.success('Forma de pago creada', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            });
        }

        navigate('/FormasPagos');
    });

    useEffect(() => {
        async function loadformaPagos() {
            if (params.forma_pago_id) {
                const { data } = await getformaPago(params.forma_pago_id);
                setValue('forma_pago_nombre', data.forma_pago_nombre);
                setValue('forma_pago_referencia', data.forma_pago_referencia);
            }
        }
        loadformaPagos();
    }, [params.forma_pago_id, setValue]);

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label style={{color:'white'}} htmlFor="forma_pago_nombre" className="form-label">Forma de Pago</label>
                    <input
                        type="text"
                        className="form-control"
                        id="forma_pago_nombre"
                        {...register('forma_pago_nombre', { required: true })}
                    />
                    {errors.forma_pago_nombre && <span className="text-danger">Este campo es requerido</span>}
                </div>

                <div className="mb-3">
                    <label style={{color:'white'}} htmlFor="forma_pago_referencia" className="form-label">Referencia</label>
                    <input
                        type="text"
                        className="form-control"
                        id="forma_pago_referencia"
                        {...register('forma_pago_referencia', { required: true })}
                    />
                    {errors.forma_pago_referencia && <span className="text-danger">Este campo es requerido</span>}
                    3r1
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>

            {params.forma_pago_id && (
                <button
                    className="btn btn-danger mt-3"
                    onClick={async () => {
                        const aceptar = window.confirm('¿Estás seguro de eliminar?');
                        if (aceptar) {
                            await deleteformaPagos(params.forma_pago_id);
                            toast.success('Forma de pago eliminada', {
                                position: 'bottom-right',
                                style: {
                                    background: '#101010',

                                    color: '#fff'
                                }
                            });
                            navigate('/FormasPagos');
                        }
                    }}
                >
                    Eliminar
                </button>

            )}
        </div>
        
    );
}
