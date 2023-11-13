import {
    combineReducers,
    legacy_createStore
} from 'redux';
import productReducer from './productReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () =>{
    return legacy_createStore(
        combineReducers({
            productAdd: productReducer,
        }),
        composeWithDevTools()
    )
}

export default configureStore