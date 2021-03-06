import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types'

//Cada reducers tiene su state inicial
const initialState = {
    alerta:null
}


export default function(state = initialState,action){
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return {
                alerta:action.payload
            }
        case OCULTAR_ALERTA:
            return {
                alerta:null
            }
        default:
            return state;
    }
}