import {
  HOME_DATA_FETCH_SUCCESS
} from '../constants';

export const fetchHomeData = () => {
  return {
  type: HOME_DATA_FETCH_SUCCESS,
  payload: 'text'
};
};
