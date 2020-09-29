import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {editarProducto} from '../actions/productoActions'

const EditarProducto = ({history}) => {

    const productoeditar = useSelector(state=>state.productos.productoeditar)

    const [nombre,setNombre] = useState('');
    const [precio,setPrecio] = useState(0);
    
    const dispacth = useDispatch()

    useEffect(()=>{

        if(productoeditar !== null){
            //Creamos un state local
            setNombre(productoeditar.nombre);
            setPrecio(productoeditar.precio);
        }

    },[productoeditar])

    const handleSubmit = e => {
        e.preventDefault()

        dispacth( editarProducto({
            nombre,
            precio,
            id: productoeditar.id
        }) )

        history.push('/')

    }
    
    return ( 
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Editar Producto
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="">Nombre Producto</label>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre Producto"
                                name="nombre"
                                value={nombre}
                                onChange={ e => setNombre(e.target.value)}
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
                                onChange={ e => setPrecio(Number(e.target.value))}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary font-weight-bold text uppercase d-block w-100"
                        >
                            Editar Producto
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default EditarProducto;