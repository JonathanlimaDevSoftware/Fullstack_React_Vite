import './form.css'
import api from '../../services/api';
import { useEffect, useState, useRef } from 'react';

const Form = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  /* Trazer dados da API */
  async function getUsers() {
    try {
      let getDados = await api.get('/users');
      setUsers(getDados.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  }

  /* Adicionar dados na API */
  async function createUsers() {
    try {
      const response = await api.post('/create', {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value
      });

      console.log('Usuário cadastrado com sucesso:', response.data);
      alert(response.data.message);

      // Após cadastro, atualizar a lista de usuários
      getUsers();

    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
    }
  }

  /* Deletar usuário */
  async function deleteUser(id) {
    try {
      let resp = await api.delete(`/delete/${id}`);
      console.log('Usuário deletado com sucesso:', resp.data);
      alert(resp.data.message);

      // Após deletar, atualizar a lista de usuários
      getUsers();

    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className='container'>
      <form action="">
        <h1>Cadastro de Usuário</h1>
        <input type="text" name="name" placeholder='Name' ref={inputName} />
        <input type="number" name="age" placeholder='Age' ref={inputAge} />
        <input type="email" name="email" placeholder='E-mail' ref={inputEmail} />
        <button className='btn btn_login' onClick={createUsers} type="button">Cadastrar</button>
      </form>

      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className="user-container">
            <div className="user-info">
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
            </div>
            <button className='btn btn_trash' type="button" onClick={() => deleteUser(user.id)}>
              <i className='bx bxs-trash-alt'></i>
            </button>
          </div>
        ))
      ) : (
        <p className="no-users">Nenhum usuário encontrado.</p>
      )}
    </section>
  );
}

export default Form;
