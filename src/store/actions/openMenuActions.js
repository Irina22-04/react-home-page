export const OPEN_MENU_CHANGE = 'OPEN_MENU_CHANGE';

export function openMenuChange(dispatch, value) {
    return dispatch({
        type: OPEN_MENU_CHANGE,
        payload: value,
    })
}