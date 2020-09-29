import {combineReducers} from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';


//Nos combina los multiples reducers para solo retornar 1
export default combineReducers({
    productos: productosReducer,
    alerta : alertaReducer
})
