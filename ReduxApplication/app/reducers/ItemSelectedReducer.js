import { ITEM_SELECTED } from '../actions/types';

const initialState = {
    selectedItem: ''
};

const placeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_SELECTED:
            return {
                ...state,
                selectedItem: action.payload
            };
        default:
            return state;
    }
}

export default placeReducer;