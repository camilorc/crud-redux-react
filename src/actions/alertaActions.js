import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types'

//Acción para mostrar una alerta
export function mostrarAlerta(alerta){

    return (dispatch) => {

        dispatch({
            type: MOSTRAR_ALERTA,
            payload: alerta
        })


    }
}

//ocultar alerta
export function ocultarAlerta(){
    return (dispatch)=>{
        dispatch({
            type:OCULTAR_ALERTA
        })
    }
}