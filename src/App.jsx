import { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} from "./services/UserService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    city: "",
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    getUsers().then((res) => {
      setUsers(res.data);
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id) {
      // Update
      updateUser(form.id, form).then(() => {
        loadUsers();
        resetForm();
      });
    } else {
      // Create
      createUser(form).then(() => {
        loadUsers();
        resetForm();
      });
    }
  };

  const editUser = (id) => {
    getUserById(id).then((res) => {
      setForm(res.data);
    });
  };

  const removeUser = (id) => {
    deleteUser(id).then(() => loadUsers());
  };

  const resetForm = () => {
    setForm({ id: "", name: "", email: "", password: "", city: "" });
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">User Management System</h1>

      {/* Form Section */}
      <div className="card shadow-lg mb-4">
        <div className="card-header bg-primary text-white fw-bold">
          {form.id ? "Update User" : "Add New User"}
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">

            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="form-control" required/>
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input name="email" value={form.email} onChange={handleChange} className="form-control" required/>
            </div>

            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input name="password" value={form.password} onChange={handleChange} className="form-control" required/>
            </div>

            <div className="col-md-6">
              <label className="form-label">City</label>
              <input name="city" value={form.city} onChange={handleChange} className="form-control" required/>
            </div>

            <div className="col-12 mt-3">
              <button className="btn btn-success me-2" type="submit">
                {form.id ? "Update" : "Create"}
              </button>
              <button className="btn btn-secondary" type="button" onClick={resetForm}>
                Clear
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Table Section */}
      <div className="card shadow">
        <div className="card-header bg-dark text-white fw-bold">All Users</div>
        <div className="card-body p-0">

          <table className="table table-striped table-hover table-bordered mb-0">
            <thead className="table-dark">
              <tr className="text-center">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="text-center">
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.password}</td>
                  <td>{u.city}</td>
                  <td>
                    <button className="btn btn-primary btn-sm me-2" onClick={() => editUser(u.id)}>
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => removeUser(u.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-muted py-3">
                    No users found
                  </td>
                </tr>
              )}

            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default App;
