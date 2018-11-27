import {
  HOME_DATA_FETCH_SUCCESS
} from '../constants';

export const usernameChanged = () => {
  return {
  type: HOME_DATA_FETCH_SUCCESS,
  payload: 'text'
};
};
