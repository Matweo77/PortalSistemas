"use client"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import "../styles/login.css" // Importa el archivo CSS para los estilos personalizados
import FloatingPaths from "@/themes/BackgroundPaths" 


export default function  Login_Sersocial({ className, ...props }) {
  const LoginImage = new URL("../assets/images/componentes/login/logo.jpg", import.meta.url).href
  // const LoginImage2 = new URL('../assets/images/componentes/login/Imagen-fondo.png', import.meta.url).href;  Imagen svg
  const LoginItems = [{ id: 1, image: LoginImage }] // {id: 2, image: LoginImage2}
  const navigate = useNavigate()
  // const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("miportalweb@miportal.org")

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword)
  // }

   const handleRedirect = (e) => {
     e.preventDefault()
     navigate("/bienvenido")
   }

  return (
    <div className="relative flex min-h-[100vh] flex-col items-center justify-center bg-muted p-0 md:p-4 Fondo">
      {/* Animación de rayas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaths position={1} pathCount={24} color="#0066cc" className="w-full h-full opacity-20" />
        <FloatingPaths position={-1} pathCount={24} color="#003366" className="w-full h-full opacity-15" />
      </div>

      {/* Contenido principal (con z-index para estar por encima de la animación) */}
      <div className="relative z-10 w-full max-w-sm md:max-w-[140vh] ancho-extra-grande">
        <div className={cn("flex flex-col gap-5 altura-extra-grande ", className)} {...props}>
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="grid p-0 -my-6 md:grid-cols-2 altura-formulario">
              <form className="md:p-10 xl:p-7 mt-7 Espaciado-extra-grande formulario-login md:max-w-[80vh]">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl font-bold">MI PORTAL WEB</h1>
                  </div>
                  <div className="grid gap-2 mt-10">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      className="h-11.5"
                      id="email"
                      type="email"
                      placeholder="Sersocial@outlook.org"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="Contraseña">  {/*onClick={handleClickShowPassword} */}
                        Contraseña
                      </Label>
                      <a href="#" className="ml-auto text-blue-800 text-sm underline-offset-2 hover:underline">
                        Olvido su contraseña?
                      </a>
                    </div>
                    <Input
                      className="h-11.5"
                      id="password"
                      // type={showPassword ? "text" : "password"}
                      placeholder="Contraseña"
                      // required
                    />
                  </div>
                   <Button className="w-full rounded-sm" type="submit" onClick={handleRedirect} >  
                    Iniciar sesión
                  </Button> 


                  <Alert className="bg-yellow-100 text-amber-700 border-none flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription className="py-1 text-amber-900">
                      <strong>Estás usando {email} &nbsp;&nbsp; 👀</strong>
                    </AlertDescription>
                  </Alert>
                  <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border"></div>
                </div>
              </form>
              <div className="relative hidden bg-muted md:block" id="Bloque-imagen">
                <img
                  src={LoginImage || "/placeholder.svg"}
                  alt="Imagen de login"
                  className="absolute imagen-logo inset-0 h-full dark:brightness-[0.2] dark:grayscale mx-0"
                />
              </div>
            </CardContent>
          </Card>
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            Al hacer clic en continuar, acepta nuestros{" "}
            <a href="https://www.sersocial.org/wp-content/uploads/2023/08/FSER-PES-POL-001-POLITICA-DE-PROTECCION-DE-DATOS-PERSONALES.pdf">
              Terminos de servicio
            </a>{" "}
            y{" "}
            <a href="https://www.sersocial.org/wp-content/uploads/2023/08/FSER-PES-POL-001-POLITICA-DE-PROTECCION-DE-DATOS-PERSONALES.pdf">
              Politica Privacidad
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  )
}