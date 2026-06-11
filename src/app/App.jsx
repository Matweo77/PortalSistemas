import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '../themes/theme-provider';
import { DashboardLayout } from '../Layouts/dashboard-layout';
import Home from '../Pages/Home';
import Permisos from '../Pages/Beneficios/Permisos';
import Sifood from '../Pages/Beneficios/Sifood';
import Seragil from '../Pages/GestionRiesgo/Seragil';
import Intranet from '../Pages/GestionHumana/Intranet';
import Facturacion from '../Pages/GestionHumana/Facturacion';
import Ingresos from '../Pages/GestionHumana/Ingresos';
import Pagos from '../Pages/GestionHumana/Pagos';
import Setting from '../Pages/user/Setting';
import Help from '../Pages/user/Help';
import Profile from '../Pages/user/Profile';
import Login_Sersocial from '../Pages/Login_Sersocial'; 
import  NotFound from '../components/error/NotFound'; 

function App() {
  const isAuthenticated = !!localStorage.getItem('access_token');
  return (
    <ThemeProvider defaultTheme='light'> 
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login_sersocial" element={<Login_Sersocial />} />
        <Route path="/" element={<Navigate to="/login_sersocial" replace />} />

        <Route > {/* Rutas protegidas con ProtectedRoute */}
          {/* Beneficios */}
          <Route path="/Beneficios" element={<DashboardLayout />}>
            <Route path="sifood" element={<Sifood />} />
            <Route path="permisos" element={<Permisos />} />
          </Route>

          {/* Gestión de riesgo */}
          <Route path='/GestionRiesgo' element={<DashboardLayout />}>
            <Route path='seragil' element={<Seragil/>} />
          </Route>

          {/* Gestión humana */}
          <Route path='/GestionHumana' element={<DashboardLayout />}>
            <Route path='facturacion' element={<Facturacion/>} />
            <Route path='ingresos' element={<Ingresos/>} />
            <Route path='pagos' element={<Pagos/>} />
            <Route path='intranet' element={<Intranet/>}/>
          </Route>
          
          {/* Rutas solitarias */}
          <Route path="/bienvenido" element={<DashboardLayout />}>  <Route index element={<Home />} />  </Route>
          <Route path='/configuracion' element={<DashboardLayout />}>  <Route index element={<Setting/>} />  </Route>
          <Route path='/ayuda' element={<DashboardLayout />}>  <Route index element={<Help/>} />  </Route>
          <Route path='/profile' element={<DashboardLayout />}>  <Route index element={<Profile/>} />  </Route>
        </Route>
        

      </Routes> 
    </ThemeProvider>
  );
}
export default App;
