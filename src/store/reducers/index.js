import { combineReducers } from "redux";

import productReducer from "./productReducer";
import openMenuReducer from './openMenuReducer';

const reducers = combineReducers({productReducer, openMenuReducer});

export default reducers;