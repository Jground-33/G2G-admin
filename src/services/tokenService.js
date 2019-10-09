function setToken(token) {
  if (token) {
    localStorage.setItem('auth-token', token);
  } else {
    localStorage.removeItem('auth-token');
  }
}

function getToken() {
  let token = localStorage.getItem('auth-token');
  // if (token) {
  //   const payload = JSON.parse(atob(token.split('.')[1]));
  //   if (payload.exp < Date.now() / 1000) {
  //     localStorage.removeItem('auth-token');
  //     token = null;
  //   }
  // }
  return token;
}

function getUserFromToken() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).userId : null;
}

export default {
  setToken,
  getToken,
  getUserFromToken,
}