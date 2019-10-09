import tokenService from './tokenService';

function getUser() {
  return tokenService.getUserFromToken();
}

export default {
  getUser,
}