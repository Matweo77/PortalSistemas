import { Link, useLocation } from "react-router-dom";
// import { ThemeToggle } from "../themes/theme-toggle";
import { Notifications } from "../components/notifications";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";

export function TopNav() {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/").filter(Boolean);
  
  const user = {
    fullName: "Usuario Sersocial",
    email: "usuario@sersocial.org",
    avatar: "S" // Aqui puedes colocar un url de imagen o un icono
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="hidden md:block">
          <nav className="flex items-center space-x-2">
            <Link to="/bienvenido" className="text-sm font-medium">Bienvenido</Link>
        
            {pathSegments.map((segment, index) => (
              <div key={segment} className="flex items-center">
                <span className="text-muted-foreground">/</span>
                <Link 
                  to={`/${pathSegments.slice(0, index + 1).join("/")}`} 
                  className="text-sm font-medium ml-2"
                >
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Notifications />
          {/* <ThemeToggle /> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.fullName} />
                  <AvatarFallback>
                    {user.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.fullName}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile">Perfil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/configuracion">Configuracion</Link>
              </DropdownMenuItem>
              <DropdownMenuItem><span className="text-red-600">Cerrar sesion</span></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}