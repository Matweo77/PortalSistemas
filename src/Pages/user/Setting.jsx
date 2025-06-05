
import Error404 from '../Error404'
function Setting() {
  return (
   <div>
    <Error404/>
   </div>
  )
}
export default Setting

// import { useEffect, useState } from 'react';
// const UserProfile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('access_token');
//     if (!token) return;

//     fetch('http://localhost:8000/api/user/profile/', {
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       },
//     })
//       .then(res => {
//         if (!res.ok) throw new Error('No autorizado');
//         return res.json();
//       })
//       .then(data => setUser(data))
//       .catch(err => console.error(err));
//   }, []);

//   if (!user) return <div>Cargando datos del usuario...</div>;

//   return (
//     <div>
//       <h2>Bienvenido, {user.name}</h2>
//       <p>Email: {user.email}</p>
//       <p>Usuario: {user.username}</p>
//     </div>
//   );
// };


// export default UserProfile;
