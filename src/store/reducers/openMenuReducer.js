import {OPEN_MENU_CHANGE} from "../actions/openMenuActions";

const initialState = {
    openMenu: false,
};

const openMenuReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case OPEN_MENU_CHANGE: {
            return {
                ...state,
                openMenu: payload,
            }
        }
        default:
            return state;
    }
};

export default openMenuReducer;