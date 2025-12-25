// import { deleteUser } from "../services/UserService";

// export default function UserList({ users, onEdit, refreshList }) {
//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure?")) return;
//     await dele
//     refreshList();
//   };

//   return (
//     <div className="custom-card p-3">
//       <h4 className="mb-3">All Users</h4>

//       {/* Desktop Table */}
//       <div className="desktop-table">
//         <table className="table table-custom">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>City</th>
//               <th>Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   No Users Found
//                 </td>
//               </tr>
//             ) : (
//               users.map((u) => (
//                 <tr key={u.id}>
//                   <td>{u.id}</td>
//                   <td>{u.name}</td>
//                   <td>{u.email}</td>
//                   <td>{u.city}</td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-primary me-2"
//                       onClick={() => onEdit(u)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-sm btn-danger"
//                       onClick={() => handleDelete(u.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile Cards */}
//       <div className="mobile-cards">
//         {users.length === 0 ? (
//           <p className="text-center">No Users Found</p>
//         ) : (
//           users.map((u) => (
//             <div key={u.id} className="user-card">
//               <p><strong>ID:</strong> {u.id}</p>
//               <p><strong>Name:</strong> {u.name}</p>
//               <p><strong>Email:</strong> {u.email}</p>
//               <p><strong>City:</strong> {u.city}</p>

//               <div className="card-actions">
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => onEdit(u)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleDelete(u.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
