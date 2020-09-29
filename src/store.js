import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

//Creamos el Store
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),

        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : f=>f
    )
);


//Se requiere en el componente principal para que fluyan los datos
export default store;