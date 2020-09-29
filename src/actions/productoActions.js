import clienteAxios from '../config/clienteAxios';
import Swal from 'sweetalert2'

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    OBTENER_PRODUCTOS_EXITO,
    OBTENER_PRODUCTOS_ERROR,
    COMENZAR_ELIMINAR_PRODUCTO,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    EDITAR_PRODUCTO_EXITO,
    EDITAR_PRODUCTO_ERROR
} from '../types'

//Crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async (dispatch) => {

        dispatch({
            type:AGREGAR_PRODUCTO
        })

        try {

            //Insertar en la API
            await clienteAxios.post('/productos',producto)

            dispatch({
                type:AGREGAR_PRODUCTO_EXITO,
                payload:producto
            })

            Swal.fire(
                'correcto',
                'El producto se gregó correctamente',
                'success'
            )
            
        } catch (error) {
            console.log(error)

            dispatch({
                type:AGREGAR_PRODUCTO_ERROR,
                payload:true
            })

            Swal.fire({
                icon:'error',
                title:'Hubo un error',
                text:'Hubo un error, intenta de nuevo',
            })
        }
    }
}

//Obtenemos todos los productos de la BD.json
export function obtenerProductos(){

    return async (dispatch)=>{

        dispatch({
            type:COMENZAR_DESCARGA_PRODUCTOS
        })

        try {
            
            //Obtenemos los productos de la API
            const listadoProductos = await clienteAxios.get('/productos')
            console.log(listadoProductos)

            dispatch({
                type:OBTENER_PRODUCTOS_EXITO,
                payload:listadoProductos.data
            })

        } catch (error) {
            console.log(error)

            dispatch({
                type:OBTENER_PRODUCTOS_ERROR,
                payload:true
            })
        }

    }
}

export function eliminarProducto(id){
    return async (dispatch) => {

        dispatch({
            type:COMENZAR_ELIMINAR_PRODUCTO,
        })

        try {
            
            await clienteAxios.delete(`/productos/${id}`)

            dispatch({
                type:ELIMINAR_PRODUCTO_EXITO,
                payload:id
            })

            Swal.fire(
                'Eliminado!',
                'Tu producto fue eliminado.',
                'success'
              )

        } catch (error) {
            console.log(error)

            dispatch({
                type:ELIMINAR_PRODUCTO_ERROR,
                payload:true
            })
        }


    }
}

export function obtenerProductoEditar(producto){

    return (dispatch) => {
        dispatch({
            type:OBTENER_PRODUCTO_EDITAR,
            payload:producto
        })

    }


}

export function editarProducto(producto){

    return async (dispatch)=>{

        try {
            
            await clienteAxios.put(`/productos/${producto.id}`,producto)

            dispatch({
                type:EDITAR_PRODUCTO_EXITO,
                payload:producto
            })

        } catch (error) {
            dispatch({
                type:EDITAR_PRODUCTO_ERROR,
            })
        }

    }

}