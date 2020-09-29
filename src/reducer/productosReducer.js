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

//Cada Reducer tienen sus propios States
const initialStates = {
    productos:[],
    error:null,
    loading:false,
    productoeditar:null
}

//El reducer siempre es una función
export default function(state = initialStates, action){
    switch (action.type) {
        case COMENZAR_ELIMINAR_PRODUCTO:
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                loading:true
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading:false,
                productos: [...state.productos,action.payload],
                error: null
            }
        case EDITAR_PRODUCTO_ERROR:
        case ELIMINAR_PRODUCTO_ERROR:
        case OBTENER_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        case OBTENER_PRODUCTOS_EXITO:
            return {
                ...state,
                loading:false,
                error:null,
                productos: action.payload,
            }
        case ELIMINAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading:false,
                error:null,
                productos: state.productos.filter(producto => producto.id !== action.payload)
            }
        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                loading:true,
                productoeditar:action.payload
            }
        case EDITAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading:false,
                error:null,
                productoeditar:null,
                productos: state.productos.map( producto => 
                    producto.id === action.payload.id ? producto = action.payload :
                    producto
                )
            }
        default:
            return state;
    }
}

