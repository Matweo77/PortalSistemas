import React from "react";

export default function Dashboard() {

  const Dashboards = [
    {
      id: 1, subtitulo : "Usuarios",
      parrafo : "Gestiona los usuarios de tu aplicación",
      boton : "Ver usuarios", ColorBoton : "bg-blue-500 hover:blue-600",
    },
    {
      id : 2, subtitulo : "Estadísticas",
      parrafo : "Revisa las métricas de rendimiento",
      boton : "Ver estadisticas", ColorBoton : "bg-green-500 hover:green-600",
    },
    {
      id : 3, subtitulo : "Configuración",
      parrafo : "Personaliza las opciones de tu cuenta", 
      boton : "Configurar", ColorBoton : "bg-purple-500 hover:purple-600",
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-white-500 opacity-[70%]">
        Bienvenido a tu panel de control. Aquí puedes gestionar todas las funciones de tu aplicación.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {Dashboards.map((contenido) => {
         return (
           <div className="p-6 bg-white rounded-lg shadow" key={contenido.id} value={`item-${contenido.id}`}>
             <h2 className="text-xl text-gray-950 font-semibold mb-2">{contenido.subtitulo}</h2>
             <p className={`${contenido.ColorParrafo}`}>{contenido.parrafo}</p>
             <div className="mt-4">
               <button className={`px-4 py-2 ${contenido.ColorBoton} text-black rounded `}>
                 {contenido.boton}
               </button>
             </div>
           </div>
         );
       })}
      </div>
    </div>
  );
}