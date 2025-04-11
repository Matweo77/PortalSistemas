import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth-context';

export function ProtectedRoute({ children }) {
  const { loading } = useAuth(); //isAuthenticated

  // Si estamos cargando, mostramos un indicador de carga
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Si no está autenticado, redirigimos al login
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

  // Si está autenticado, mostramos los children (el contenido protegido)
  return children;
}