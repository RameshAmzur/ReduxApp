import placeReducer from './reducers/placeReducer';
import ItemselectedReducer from './reducers/ItemSelectedReducer'
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  places: placeReducer,
  Selection: ItemselectedReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;