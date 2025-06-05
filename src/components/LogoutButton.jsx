import React from 'react';
import { useMsal } from '@azure/msal-react';

const LogoutButton = () => {
  const { instance, accounts } = useMsal();

  const handleLogout = () => {
    const logoutRequest = {
      account: accounts[0],
      postLogoutRedirectUri: "http://localhost:5173/login_Sersocial", 
    };
    // Puedes usar logoutRedirect o logoutPopup según experiencia deseada
    instance.logoutRedirect(logoutRequest);
    // o para popup:
    // instance.logoutPopup(logoutRequest);

    localStorage.clear(); // Limpiar datos del usuario
  };

  return (
    <button className="text-red-500" onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
