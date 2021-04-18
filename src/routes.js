const host = 'http://localhost:8080';
const prefix = 'api';

export default {
  getUsers: () => [host, prefix, 'users'].join('/'),
  logIn: () => [host, prefix, 'auth', 'signin'].join('/'),
};