import Axios from "axios";
import { SWC_LIST_REQUEST, SWC_LIST_SUCCESS } from "../constants/SWCconstant"
import { SWC_LIST_FAIL } from './../constants/SWCconstant';

export const listSWC = ({pageNumber = ""}) => async (dispatch, getState) =>{
    dispatch({type: SWC_LIST_REQUEST});
    try {
      const { data } = await Axios.get(
        `https://swapi.dev/api/people/?page=${pageNumber}`
      );
      dispatch({type: SWC_LIST_SUCCESS, payload: data.results});
      console.log(data.results);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: SWC_LIST_FAIL, payload: message });
    }
}