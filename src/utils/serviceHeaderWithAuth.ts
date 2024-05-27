export const serviceHeaderWithAuth = () => {
  const token = localStorage.getItem('token');

  const tokenHeaderObject = {
    ...(token && {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  };

  return tokenHeaderObject;
};
