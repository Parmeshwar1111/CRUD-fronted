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
    getUsers().then((res) => setUsers(res.data));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id) {
      updateUser(form.id, form).then(() => {
        loadUsers();
        resetForm();
      });
    } else {
      createUser(form).then(() => {
        loadUsers();
        resetForm();
      });
    }
  };

  const editUser = (id) => {
    getUserById(id).then((res) => setForm(res.data));
  };

  const removeUser = (id) => {
    if (!window.confirm("Are you sure?")) return;
    deleteUser(id).then(() => loadUsers());
  };

  const resetForm = () => {
    setForm({ id: "", name: "", email: "", password: "", city: "" });
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">User Management System</h1>

      {/* ================= FORM ================= */}
      <div className="card shadow-lg mb-4">
        <div className="card-header bg-primary text-white fw-bold">
          {form.id ? "Update User" : "Add New User"}
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">

            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">City</label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-12 mt-3">
              <button className="btn btn-success me-2" type="submit">
                {form.id ? "Update" : "Create"}
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={resetForm}
              >
                Clear
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* ================= USERS ================= */}
      <div className="card shadow">
        <div className="card-header bg-dark text-white fw-bold">
          All Users
        </div>

        <div className="card-body">

          {/* DESKTOP TABLE */}
          <div className="desktop-view">
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
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center text-muted py-3">
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((u) => (
                    <tr key={u.id} className="text-center">
                      <td>{u.id}</td>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>{u.password}</td>
                      <td>{u.city}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() => editUser(u.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeUser(u.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARDS */}
          <div className="mobile-view">
            {users.length === 0 ? (
              <p className="text-center text-muted">No users found</p>
            ) : (
              users.map((u) => (
                <div key={u.id} className="user-card">
                  <p><strong>ID:</strong> {u.id}</p>
                  <p><strong>Name:</strong> {u.name}</p>
                  <p><strong>Email:</strong> {u.email}</p>
                  <p><strong>Password:</strong> {u.password}</p>
                  <p><strong>City:</strong> {u.city}</p>

                  <div className="d-flex gap-2 mt-2">
                    <button
                      className="btn btn-primary w-50"
                      onClick={() => editUser(u.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger w-50"
                      onClick={() => removeUser(u.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
