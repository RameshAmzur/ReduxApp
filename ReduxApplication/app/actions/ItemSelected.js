import { ITEM_SELECTED } from './types';

export const itemSelected = item_name => {
    return {
        type: ITEM_SELECTED,
        payload: item_name
    }
}