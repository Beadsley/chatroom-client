import { combineReducers } from 'redux';
import { AlertActionType, EReduxAlertActionTypes, Alert } from '../actions/actions.alert.types';

const initialState: Alert = {
  type: undefined,
  activated: false,
  message: undefined,
};

const alertReducer = (state = initialState, action: AlertActionType): Alert => {
  switch (action.type) {
    case EReduxAlertActionTypes.USERNAME_TAKEN:
      return action.payload;
    case EReduxAlertActionTypes.CLOSE_ALERT:
      return initialState;
    // case EReduxUserActionTypes.LOGIN_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload.error,
    //   };
    default:
      return state;
  }
};

export default combineReducers({
  data: alertReducer,
});
