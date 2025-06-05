import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Search } from "lucide-react"
import { useEffect, useState } from 'react';

export default function Profile() {
  const [user, setUser] = useState(null);

  //Hook para obtener los datos del usuario
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) return;

    fetch('http://localhost:8000/api/user/profile/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error('No autorizado');
        return res.json();
      })
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, []);

  if (!user) return <div>Cargando datos del usuario...</div>;

  

  return (
    <div className="w-full mx-auto bg-white rounded-lg ">
      {/* Header */}
      <div className="flex items-center justify-between p-1 border-b">
        <div className="space-y-1">
          <h1 className="text-lg font-medium ">Bienvenido, {user?.name} </h1>
          <p className="text-sm text-muted-foreground">Miercoles 26/03/2025</p>
        </div>
        <div className="flex items-center">
          {/* <div className="relative  hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground sm-d-none" />
            <Input type="search" placeholder="Search" className="w-90 pl-8 bg-muted/50" />
          </div> */}
        </div>
      </div>

      {/* Banner */}
      <div className="h-33 bg-gradient-to-r from-[#7785ee] to-[#e8ebfc]"></div>
     {/* bg-gradient-to-r from-blue-200 to-amber-100

      {/* Profile Info */}
      <div className="px-6">
        <div className="flex items-end gap-4 -mt-13">
          <Avatar className="h-24 w-24 border-4 border-white shadow-sm">
            <AvatarImage src="/placeholder.svg" alt="Alexa Rawles" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <div className="flex items-center justify-between flex-1 pb-4">
            <div>
              <h2 className="text-xl font-semibold">{user?.username}</h2>
              <p className="text-sm text-muted-foreground">Sersocial ips</p>
            </div>
            {/* <Button size="sm">Edit</Button> */}
          </div>
        </div>

        {/* Form */}
        <Card className="mt-6 border-none shadow-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Nombres completos</label>
                <Input className="h-12 w-full" placeholder="Tu primer nombre" defaultValue="" />
              </div>
              <div >
                <label className="text-sm font-medium space-y-3">Apellidos</label>
                <Input className="h-12 w-full" placeholder="Tu primer aprellido" defaultValue="" />
              </div>
              <div >
                <label className="text-sm font-medium">Genero</label>
                <Select>
                  <SelectTrigger className="min-h-[2.9rem] w-full">
                    <SelectValue placeholder="Tu genero" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Maculino</SelectItem>
                    <SelectItem value="female">Femenino</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div >
                <label className="text-sm font-medium h-12">Pais</label>
                <Select>
                  <SelectTrigger className="min-h-[2.9rem] w-full">
                    <SelectValue placeholder="Tu pais" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">Colombia</SelectItem>
                    <SelectItem value="uk">Venezuela</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Ecuador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid col-1 mt-11 -mb-5">
              <h3>Tus aplicaciones preferidas</h3>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12 [&_div]:h-32 [&_div]:flex [&_div]:items-center [&_div]:justify-center [&_div]:rounded-t-xl [&_div]:shadow-lg [&_div]:transform [&_div]:hover:translate-y-1 [&_div]:transition-transform [&_div]:duration-300"> 
              <div>Sifood</div>
              <div>Seragil_v2</div>
              <div>Intranet</div>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-medium mb-2">Mi correo electrónico</h3> 
              <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-md">
                <div className="h-6 w-6 rounded bg-[#5769ee] flex items-center justify-center text-white text-xs">@</div>
                <div>
                  <p className="text-sm">{user?.username}</p>
                  <p className="text-xs text-muted-foreground">activo hoy</p>
                </div>
              </div>              
               {/* <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600 hover:bg-blue-50 px-0">
                + Add Email Address
              </Button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

