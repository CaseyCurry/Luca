export const persistToken = (token) => {
  sessionStorage.token = token;
};

export const findToken = () => {
  const token = sessionStorage.token;
  return token;
};
