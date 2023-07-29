export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

export const setUserProfile = (profileData) => ({
  type: 'SET_USER_PROFILE',
  payload: profileData,
});