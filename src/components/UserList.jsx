// import { deleteUser } from "../services/UserService";

// export default function UserList({ users, onEdit, refreshList }) {
//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure?")) return;

//     await deleteUser(id);
//     refreshList();
//   };

//   return (
//     <div>
//       <h2>User List</h2>
//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>City</th>
//             <th>Password</th>
//           </tr>
//         </thead>

//         <tbody>
//           {users.length === 0 ? (
//             <tr>
//               <td colSpan="5" style={{ textAlign: "center" }}>
//                 No Users Found
//               </td>
//             </tr>
//           ) : (
//             users.map((u) => (
//               <tr key={u.id}>
//                 <td>{u.id}</td>
//                 <td>{u.name}</td>
//                 <td>{u.email}</td>
//                 <td>{u.city}</td>
//                 <td>
//                   <button onClick={() => onEdit(u)}>Edit</button>
//                   <button
//                     onClick={() => handleDelete(u.id)}
//                     style={{ marginLeft: "10px" }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }
