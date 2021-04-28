import api from './api';

const todoApi = {
  createTodo: async () => {
    const { data } = await api.post('todo');
    return data;
  },
  getTodos: async () => {
    const { data } = await api.get('todo');
    return data;
  },
  updateTodo: async () => {
    const { data } = await api.put('todo');
    return data;
  },
  deleteTodo: async (id) => {
    const { data } = await api.delete(`todo/${id}`);
    return data;
  },
};

export default todoApi;