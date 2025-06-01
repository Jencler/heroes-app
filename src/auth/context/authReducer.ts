import type { AuthAction, AuthState } from "../types/types";

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        logged: false,
      };
    default:
      return state;
  }
};
