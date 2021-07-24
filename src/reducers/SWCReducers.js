import { SWC_LIST_REQUEST, SWC_LIST_SUCCESS, SWC_LIST_FAIL } from './../constants/SWCconstant';

export const SWCListReducer = (state={loading: true}, action) =>{
    switch (action.type) {
        case SWC_LIST_REQUEST:
            return {loading: true};
        case SWC_LIST_SUCCESS:
            return {loading: false, success: true, people: action.payload.people};
        case SWC_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}