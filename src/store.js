import { createStore,compose, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { CharacterListReducer } from './reducers/CharacterReducers';

const reducer = combineReducers({
    CharacterList: CharacterListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
export default store;