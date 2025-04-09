import React, { useState, useEffect } from "react";
import "/src/styles/styles.css";
import { saveUser, getUsers, deleteUser, updateUser, User } from "../../services/userService";

const Register: React.FC = () => {
  const [form, setForm] = useState<User>({ name: "", email: "", password: "" });
  const [editing, setEditing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (editing) {
      updateUser(form);
      setEditing(false);
    } else {
      const result = saveUser(form);
      if (!result.success) {
        setError(result.message);
        return;
      }
    }

    setUsers(getUsers());
    setForm({ name: "", email: "", password: "" });
    setError(null);
  };

  const handleEdit = (user: User) => {
    setForm(user);
    setEditing(true);
    setError(null);
  };

  const handleDelete = (email: string) => {
    deleteUser(email);
    setUsers(getUsers());
  };

  return (
    <div className="container">
      <h2>{editing ? "Editar Usuario ✏️" : "Registro de Usuario 🧾"}</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          disabled={editing} // evitar cambiar el email al editar
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">{editing ? "Actualizar" : "Registrarse"}</button>
        {error && <p className="error">{error}</p>}
      </form>

      <h3>Usuarios Registrados 👥</h3>
      {users.length === 0 ? (
        <p>No hay usuarios registrados aún.</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>✏️ Editar</button>
                  <button onClick={() => handleDelete(user.email)}>🗑️ Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Register;
