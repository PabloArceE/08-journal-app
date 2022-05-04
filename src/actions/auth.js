import types from "../types/types";

export const startLoginEmailPassword = (email, password) => {
  console.log('email: ', email, 'password: ', password)
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123124, 'Middleware'))
    }, 3000);
  }
}

const login = (uid, displayName) => ({
  type: types.login,
  payload: {
      uid,
      displayName,
  }
});
