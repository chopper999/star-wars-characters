
import { CHARACTER_LIST_REQUEST, CHARACTER_LIST_SUCCESS, CHARACTER_LIST_FAIL } from './../constants/CharacterConstant';

export const CharacterListReducer = (state={loading: true}, action) =>{
    switch (action.type) {
        case CHARACTER_LIST_REQUEST:
            return {loading: true};
        case CHARACTER_LIST_SUCCESS:
            return {loading: false, people: action.payload.results, pages: action.payload.count};
        case CHARACTER_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}