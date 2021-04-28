import api from './api';

const userApi = {
  createUser: async (email, password) => {
    const { data } = api.post('user', {email: email, senha: password});
    return data;
  },
  login: async (email, password) => {
    const { data } = api.post('user/login', {email: email, senha: password});
    return data;
  },
};

export default userApi;