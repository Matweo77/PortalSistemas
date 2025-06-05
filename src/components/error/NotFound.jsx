import { Link , useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const navigate = useNavigate(); // Hook para navegar programáticamente
  // Redirigir automáticamente después de 5 segundos

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(() => {    navigate('/bienvenido');   });
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 ">
      <svg
        className="w-80 min-h-50 text-red-500 mt-[-50px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3m0 3.2h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h1 className="text-[7em] font-bold text-gray-900 mb-3">404</h1>
      <p className="text-lg text-gray-700 mb-8">
        Lo sentimos, la página que buscas no existe.
      </p>

      <div className="flex gap-4">
        <Link
          to="/login_sersocial"
          className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Ir al Login
        </Link>
        <Link to="/bienvenido" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md shadow-md hover:bg-blue-50 transition">
          Ir al Home si estás autenticado
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
