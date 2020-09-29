import React from 'react';
import {useHistory} from 'react-router-dom'
import {eliminarProducto,obtenerProductoEditar} from '../actions/productoActions'
import {useDispatch} from 'react-redux'
import Swal from 'sweetalert2'

const Producto = ({producto}) => {

    const {nombre, precio, id} = producto

    const dispatch = useDispatch();
    const history = useHistory();

    const deleteProducto = id => {

        //Preguntamos antes de eliminar
        Swal.fire({
            title: 'Estas seguro?',
            text: "Luego de eliminar no podrás acceder nuevamente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Eliminar!'
          }).then((result) => {
            if (result.value) {
                dispatch(eliminarProducto(id))
            }
          })
    }

    const obtieneProducto = producto => {
        dispatch(obtenerProductoEditar(producto))
        history.push(`/productos/editar/${producto.id}`)
    }

    return (  
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold"> $ {precio}</span></td>
            <td className="acciones">
                <button 
                    type='button'
                    onClick={() => obtieneProducto(producto)}
                    className="btn btn-primary mr-2"
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteProducto(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
}
 
export default Producto;