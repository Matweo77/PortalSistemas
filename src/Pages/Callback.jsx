import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
const navigate = useNavigate();

useEffect(() => {
const query = new URLSearchParams(window.location.search);
const code = query.get('code');
// console.log('Código recibido:', code);

if (code) {
  fetch('http://localhost:8000/auth/azure/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code,
      redirect_uri: 'http://localhost:5173/callback' // Asegúrate de que este URI coincida con el configurado en Azure
    })
  })
    .then(res => res.json())
    .then(data => {
        // console.log('Datos recibidos:', data);
        // console.log('Token de acceso:', data.access);
        // console.log('Token de ID:', data.id_token);
        // console.log('Token de actualización:', data.refresh_token);
      if (data.access) {
        localStorage.setItem('access_token', data.access);
        navigate('/bienvenido'); // o donde desees
      } else {
        console.error('No token recibido');
      }
    });
}
}, [navigate]);

return <div>Procesando inicio de sesión...</div>;
};

export default Callback;