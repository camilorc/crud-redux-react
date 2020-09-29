import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'

//Actions de REDUX
import {crearNuevoProductoAction} from '../actions/productoActions'
import {mostrarAlerta,ocultarAlerta} from '../actions/alertaActions'


const NuevoProducto = ({history}) => {

    //Creamos un state local
    const [nombre,setNombre] = useState('');
    const [precio,setPrecio] = useState(0);

    //usamos useDispatch para crear una función que ejecuta los actions
    const dispatch = useDispatch()

    //Para acceder al State del Store
    const cargando = useSelector(estate =>estate.productos.loading);
    const alerta = useSelector(estate => estate.alerta.alerta);

    const onSubmitNuevoProducto = e => {
        e.preventDefault()

        //Validamos
        if(nombre.trim() === '' || precio <= 0){
            dispatch(mostrarAlerta({
                msg:'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }))
            return;
        }
        dispatch(ocultarAlerta());

        //Ejecutamos las actions
        dispatch(crearNuevoProductoAction(
            {
                nombre,
                precio
            }
        ))

        history.push('/')
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo Producto
                        </h2>
                        {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
                        <form 
                            onSubmit={onSubmitNuevoProducto}
                        >
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e=>setNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e=>setPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text uppercase d-block w-100"
                            >
                                Agregar Producto
                            </button>
                        </form>
                        {cargando ? <p>Cargando....</p> : null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;