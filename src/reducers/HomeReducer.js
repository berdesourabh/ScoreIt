import {
  HOME_DATA_FETCH_SUCCESS
} from '../constants';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOME_DATA_FETCH_SUCCESS:
    return action.payload;
    default:
      return state;

  }
};
