import Axios from "axios";
import { CHARACTER_LIST_REQUEST, CHARACTER_LIST_SUCCESS, CHARACTER_LIST_FAIL } from './../constants/CharacterConstant';


export const listCharacter = ({ pagination=" " }) => async (dispatch, getState) =>{
    dispatch({type: CHARACTER_LIST_REQUEST});
    try {
      const { data } = await Axios.get(
        `https://swapi.dev/api/people/?page=${pagination}`
      );
      dispatch({type: CHARACTER_LIST_SUCCESS, payload: data});
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CHARACTER_LIST_FAIL, payload: message });
    }
}