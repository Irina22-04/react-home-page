import rootReducer from './store/reducers';
import {createStore} from "redux";

export default () => {
    const store = createStore(rootReducer);
    return {store}
}