// import React, { useState, useEffect } from 'react';
// import { Table } from 'react-bootstrap';

// export const todoUrl = 'https://jsonplaceholder.typicode.com/todos';
// export const userUrl = 'https://jsonplaceholder.typicode.com/users';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => retrieveTodos(), []);
//   const retrieveTodos = async () => {
//     const todoResponse = await fetch(todoUrl);
//     const userResponse = await fetch(userUrl);

//     if (todoResponse.status === 500) {
//       setHasError(true);
//       return;
//     }

//     const todos = await todoResponse.json();
//     const users = await userResponse.json();

//     todos.forEach((todo) => {
//       const user = users.find((user) => user.id === todo.userId);
//       todo.user = user;
//     });

//     setTodos(todos);
//   };


//   return (
//     <div>
//       {hasError ? <div>Opps come back later</div> : null}
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>User</th>
//             <th>Todo</th>
//             <th>Completed?</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos.map((todo) => (
//             <tr key={todo.id}>
//               <td> {todo.user.name}</td>
//               <td>{todo.title}</td>
//               <td>{todo.completed ? <span>&#10004;</span> : ''}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default TodoList;
