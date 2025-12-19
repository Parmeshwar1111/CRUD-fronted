// import { useState, useEffect } from "react";
// import { createUser, updateUser } from "../services/UserService";

// export default function UserForm({ selectedUser, refreshList, clearSelection }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     city: ""
//   });

//   useEffect(() => {
//     if (selectedUser) {
//       setForm(selectedUser);
//     }
//   }, [selectedUser]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (selectedUser) {
//         await updateUser(selectedUser.id, form);
//         alert("User Updated Successfully");
//       } else {
//         await createUser(form);
//         alert("User Added Successfully");
//       }

//       refreshList();
//       clearSelection();
//       setForm({ name: "", email: "", password: "", city: "" });
//     } catch (err) {
//       alert("Error occurred!");
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
//       <input
//         name="name"
//         placeholder="Name"
//         value={form.name}
//         onChange={handleChange}
//         required
//       /><br />

//       <input
//         name="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={handleChange}
//         required
//       /><br />

//       <input
//         name="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={handleChange}
//         required
//       /><br />

//       <input
//         name="city"
//         placeholder="City"
//         value={form.city}
//         onChange={handleChange}
//         required
//       /><br />

//       <button type="submit">
//         {selectedUser ? "Update User" : "Add User"}
//       </button>

//       {selectedUser && (
//         <button type="button" onClick={clearSelection} style={{ marginLeft: "10px" }}>
//           Cancel Edit
//         </button>
//       )}
//     </form>
//   );
// }
