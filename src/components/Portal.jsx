"use client"

import { useState } from "react"
import { Search, FileText, Pill, Receipt, Activity, Users,} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Imagen_sifood = new URL('../assets/images/componentes/Portal/Sifood_Logo.png', import.meta.url).href;
const Imagen_seragil = new URL('../assets/images/componentes/Portal/Seragil_Logo.png', import.meta.url).href;
const Imagen_permisos = new URL('../assets/images/componentes/Portal/Permisos_Logo.png', import.meta.url).href;
const Imagen_predeterminada = new URL('../assets/images/componentes/Login/1.png', import.meta.url).href;

  // Renderizando imagen de logo
  const LoginItems = [
    {id: 1, image: Imagen_sifood} , 
    {id: 2, image: Imagen_permisos},
    {id: 3, image: Imagen_seragil},
    {id: 4, image: Imagen_predeterminada},
  ];

const sistemas = [
  {
    id: 1,
    title: "SIFOOD",
    description: "Acceso al sistema de restaurante.",
    image : <img src={Imagen_sifood} className="h-30 w-30 -my-4" />,
    category: "beneficios",
    url : "https://sifood.sersocial.org/Default.aspx"
  },
  {
    id: 2,
    title: "PERMISOS",
    description: "Programación y gestión de citas de pacientes",
    image: <img src={Imagen_permisos} className="h-25 w-30 -my-1" />,
    category: "beneficios",
    url : "https://solicitudes.sersocial.org/login/?next=/"
  },
  {
    id: 3,
    title: "SERAGIL",
    description: "Gestión de medicamentos e inventario farmacéutico",
    image: <img src={Imagen_seragil} className="h-25 w-35 -ml-5" />,
    category: "gestionriesgo",
    url : "https://seragil.sersocial.org/SerAgil/web/Logueo/login.html"
  },
  {
    id: 4,
    title: "INTRANET",
    description: "Sistema de facturación y gestión financiera",
    image: <img src={Imagen_predeterminada} className="h-21 w-49 mt-2.5 mb-1" />,
    category: "gestionhumana",
    url : "https://intranet.sersocial.org/share/page/site/publico/dashboard",
  },
  {
    id: 5,
    title: "Otro",
    description: "Resultados y solicitudes de laboratorio",
    image: <img src={Imagen_predeterminada} className="h-21 w-49 mt-2.5 mb-1" />,
    category: "otro",
  },
  {
    id: 6,
    title: "Otro",
    description: "Registro y administración de datos de pacientes",
    image: <img src={Imagen_predeterminada} className="h-21 w-49 mt-2.5 mb-1" />,
    category: "otro",
  },
]

const Portal = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [activeTab, setActiveTab] = useState("todos")

    const filteredSistemas = sistemas.filter((sistema) => {
      const matchesSearch =
        sistema.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sistema.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = activeTab === "todos" || sistema.category === activeTab.toLowerCase() // Filtro de todos
      return matchesSearch && matchesCategory
    })

    const handleRedirect = (url) => {
      window.location.href = url; // Redirige a la URL externa
    };

  return (
    <div className="w-full max-w-8xl 3xl:max-w-40xl mx-auto pt-12 pb-6.5 px-0 mt-2">
      <div className="text-start -mt-6 mb-8 ">
        <h2 className="text-5xl font-bold mb-2 text-[#118ffb]">Portal de Sistemas</h2>
        <p className="text-muted-foreground">Acceso centralizado a todos los sistemas de la institución de salud</p>
      </div>

      <div className="flex flex-col space-y-4 mb-8">
        <div className="flex items-center relative ">
          <Search className="absolute left-3 h-5 w-6 text-muted-foreground " />
          <Input
            placeholder="Buscar sistemas..."
            className="pl-10 w-200 h-12 shadow-sm "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        <Tabs defaultValue="todos" className="w-full " onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-lg ml-auto grid-cols-4 h-13">
            <TabsTrigger  className="cursor-pointer" value="todos">Todos</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="Beneficios">Beneficios</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="gestionhumana">Gestion Humana</TabsTrigger>
            <TabsTrigger className="cursor-pointer ml-3" value="gestionriesgo">Gestion Riesgo</TabsTrigger>
          </TabsList>
        </Tabs>
        </div>   
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[27vh]">
        {filteredSistemas.map((sistema) => (
          <Card key={sistema.id} className="overflow-hidden  transform hover:translate-y-2 transition-transform duration-300">
            <CardContent>
            <div className="flex justify-center">{sistema.image}</div>
            </CardContent>
            <CardHeader className="flex flex-row items-center justify-center gap-3 -mb-5">
              {/* <h3 className="font-semibold text-lg">{sistema.title}</h3> */}
            </CardHeader>
            <CardContent>
               <p className="text-sm text-muted-foreground text-center">{sistema.description}</p>
            </CardContent>
            <CardFooter>
              <Button 
              variant="outline" 
              onClick={() =>{ 
                handleRedirect(sistema.url)
              }} 
              className="w-full cursor-pointer">
                Acceder al sistema
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center h-8">
        <div>© 2025 Sersocial ips. Todos los derechos reservados.</div>
        <div className="flex gap-4 mt-4 md:mt-0 [&_hover:underline]"> {/* El [&_a] funciona para compartir clases a los elementos hijos */}
          <a href="https://www.sersocial.org/wp-content/uploads/2023/08/FSER-PES-POL-001-POLITICA-DE-PROTECCION-DE-DATOS-PERSONALES.pdf">
            Términos
          </a>
          <a href="https://www.sersocial.org/wp-content/uploads/2023/08/FSER-PES-POL-001-POLITICA-DE-PROTECCION-DE-DATOS-PERSONALES.pdf" >
            Privacidad
          </a>
          <a href="https://www.sersocial.org/wp-content/uploads/2023/08/FSER-PES-POL-001-POLITICA-DE-PROTECCION-DE-DATOS-PERSONALES.pdf">
            Contacto
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Portal

