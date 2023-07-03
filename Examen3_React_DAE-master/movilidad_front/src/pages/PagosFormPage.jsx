import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createPagos, deletePagos, updatePagos, getPago } from '../api/pagos.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function PagosFormPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.movilidad_pago_id) {
      await updatePagos(params.movilidad_pago_id, data);
      toast.success('Pago de movilidad actualizado', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#fff'
        }
      });
    } else {
      await createPagos(data);
      toast.success('Pago de movilidad creada', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#fff'
        }
      });
    }

    navigate('/PagosPage');
  });

  useEffect(() => {
    async function loadPagos() {
      if (params.movilidad_pago_id) {
        const { data } = await getPago(params.movilidad_pago_id);
        setValue('movilidad_pago_fecha', data.movilidad_pago_fecha);
        setValue('movilidad_pago_monto', data.movilidad_pago_monto);
        setValue('movilidad', data.movilidad);
        setValue('forma_pago', data.forma_pago);
      }
    }
    loadPagos();
  }, [params.movilidad_pago_id, setValue]);


  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label style={{color:'white'}} htmlFor="movilidad_pago_fecha" className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            id="movilidad_pago_fecha"
            {...register('movilidad_pago_fecha', { required: true })}
          />
          {errors.movilidad_pago_fecha && <span className="text-danger">Este campo es requerido</span>}
        </div>

        <div className="mb-3">
          <label style={{color:'white'}} htmlFor="movilidad_pago_monto" className="form-label">Monto</label>
          <input
            type="number"
            className="form-control"
            id="movilidad_pago_monto"
            {...register('movilidad_pago_monto', { required: true })}
          />
          {errors.movilidad_pago_monto && <span className="text-danger">Este campo es requerido</span>}
        </div>

        <div className="mb-3">
          <label style={{color:'white'}} htmlFor="movilidad" className="form-label">Movilidad</label>
          <input
            type="number"
            className="form-control"
            id="movilidad"
            {...register('movilidad', { required: true })}
          />
          {errors.movilidad && <span className="text-danger">Este campo es requerido</span>}
        </div>

        <div className="mb-3">
          <label style={{color:'white'}} htmlFor="forma_pago" className="form-label">Forma de Pago</label>
          <input
            type="number"
            className="form-control"
            id="forma_pago"
            {...register('forma_pago', { required: true })}
          />
          {errors.forma_pago && <span className="text-danger">Este campo es requerido</span>}
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
      </form>

      {params.movilidad_pago_id && (
        <button
          className="btn btn-danger mt-3"
          onClick={async () => {
            const aceptar = window.confirm('¿Estás seguro de eliminar?');
            if (aceptar) {
              await deletePagos(params.movilidad_pago_id);
              toast.success('Pago de movilidad eliminado', {
                position: 'bottom-right',
                style: {
                  background: '#101010',
                  color: '#fff'
                }
              });
              navigate('/PagosPage');
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
