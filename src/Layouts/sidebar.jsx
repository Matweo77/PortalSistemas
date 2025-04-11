"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Home,Zap, Activity , ArrowDownUp, Building2, Wallet, Receipt, CreditCard, Ham , ShieldCheck , Settings, HelpCircle, Menu, ChevronDown, MenuIcon, Server} from "lucide-react"
import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "../components/ui/tooltip"


const navigation = [
  // { name: "Dashboard", href: "/dashboard", icon: Zap },
  { name: "Inicio", href: "/bienvenido", icon: Home },
  {
    name: "Beneficios",
    icon: Building2,
    submenu: [
      { name: "Sifood", href: "/Beneficios/sifood", icon: Ham  },
      { name: "Permisos", href: "/Beneficios/permisos", icon: ShieldCheck  },
    ],
  },
  {
    //Submenus
    name: "Gestión de riesgo",
    icon: Server,
    submenu: [
      { name: "Seragil", href: "/GestionRiesgo/seragil", icon: Activity  },
    ],
  },
  {
    name: "Gestion Humana",
    icon: CreditCard,
    submenu: [
      { name: "Intranet", href: "/GestionHumana/intranet", icon: ArrowDownUp  },
      { name: "Facturacion", href: "/GestionHumana/facturacion", icon: Wallet },
      { name: "Ingresos", href: "/GestionHumana/ingresos", icon: Receipt },
      { name: "Pagos", href: "/GestionHumana/pagos", icon: CreditCard },

    ],
  },
]

const bottomNavigation = [
  { name: "Configuracion", href: "/configuracion", icon: Settings },
  { name: "Ayuda", href: "/ayuda", icon: HelpCircle },
]

export function Sidebar() {
  const { pathname } = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState({})
  const LoginImage = new URL('../assets/images/componentes/login/Logo-Sersocial-ips.png', import.meta.url).href;


  const toggleSubmenu = (name) => {
    setExpandedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  // Renderiza un item de la navegación
  const NavItem = ({ item = false }) => {
    // Si el item tiene submenu, se renderiza como expandible
    if (item.submenu) {
      return (
        <ExpandableNavItem
          item={item}
          isExpanded={expandedItems[item.name] || false}
          onToggle={() => toggleSubmenu(item.name)}
        />
      )
    }

    const LoginItems = [{id: 1, image: LoginImage,}]; // Renderizando imagen de logo


    // Si el item es un item de la navegación inferior, se renderiza con un estilo diferente
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild >
          <Link
            to={item.href}
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-md font-medium transition-colors ", // Este es el menu de incio
              pathname === item.href
                ? "bg-blue-50 text-secondary-foreground"
                : "text-foreground hover:bg-blue-50 hover:text-secondary-foreground",
              isCollapsed && "justify-center px-2",
            )}
          >
            <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        </TooltipTrigger>
        {isCollapsed && (
          <TooltipContent side="right" className="flex items-center gap-4">
            {item.name}
          </TooltipContent>
        )}
      </Tooltip>
    )
  }

  // Renderiza un item de la navegación que tiene submenu
  const ExpandableNavItem = ({ item, isExpanded, onToggle }) => {
  const hasActiveChild = item.submenu?.some((subItem) => pathname === subItem.href)

  
    return (
      <div className="space-y-1">
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <button
              onClick={onToggle}
              className={cn(
                "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors", // Aqui estoy haciendo el cambio par el tono y tamaño //menus
                hasActiveChild
                  ? "bg-blue-50 text-secondary-foreground"
                  : "text-foreground hover:bg-blue-50 hover:text-secondary-foreground",
                isCollapsed && "justify-center px-2",
              )}
            >
              <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
              {!isCollapsed && (
                <>
                  <span className="flex-1 text-left">{item.name}</span>
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform duration-200", isExpanded ? "rotate-180" : "")}
                  />
                </>
              )}
            </button>
          </TooltipTrigger>
          {isCollapsed && (
            <TooltipContent side="right" className="flex items-center gap-4">
              {item.name}
            </TooltipContent>
          )}
        </Tooltip>

        {/* Submenu items */}
        {!isCollapsed && isExpanded && (
          <div className="ml-6 space-y-1 border-l border-border pl-2">
            {item.submenu.map((subItem) => (
              <Link
                key={subItem.name}
                to={subItem.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-[11px] font-medium transition-colors", // Esta es para los submenus
                  pathname === subItem.href
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-blue-50 hover:text-secondary-foreground",
                )}
              >
                <subItem.icon className="mr-3 h-4 w-4" />
                <span>{subItem.name}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Cuando la sidebar es collapsed, lista los submenus in tooltip */}
        {isCollapsed && isExpanded && (
          <div className="absolute left-full top-[4.6rem] ml-1 w-48 rounded-md border border-border bg-background shadow-md">
            {item.submenu.map((subItem) => (
              <Link
                key={subItem.name}
                to={subItem.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === subItem.href
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground",
                )}
              >
                <subItem.icon className="mr-3 h-4 w-4" />
                <span>{subItem.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <TooltipProvider> 
      <>
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background rounded-md shadow-md"  
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle sidebar" 
        >                         
          <Menu className="h-6 w-6" />
        </button>
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-20 flex flex-col bg-background transition-all duration-300 ease-in-out",
            isCollapsed ? "w-[72px]" : "w-63",
            isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          )}
        >
          <div className="border-border mt-1 mb-3">
            <div className={cn("flex h-16 items-center gap-2 px-4", isCollapsed && "justify-center")}> {/* Cuando se comprima la barra de navegacion */}
              {!isCollapsed && (
                <Link to="https://www.sersocial.org/" className="flex items-center font-semibold">
                  <img
                  src={LoginImage}
                  alt="Imagen de login"
                  className="dark:brightness-[0.2] dark:grayscale pr-6 pt-2 pb-2"
                />
                </Link>
              )}
              <Button
                variant="ghost"
                size="sm"
                className={cn("ml-auto h-8 w-8", isCollapsed && "ml-0")}
                onClick={() => {
                  setIsCollapsed(!isCollapsed)
                  // Añadir una clase al body para ajustar el margen del contenido principal
                  document.body.classList.toggle("sidebar-collapsed")
                }}
              >
                <MenuIcon className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
                <span className="sr-only">{isCollapsed ? "Expand" : "Collapse"} Sidebar</span>
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </nav>
          </div>
          <div className="border-t border-border p-2">
            <nav className="space-y-1 text-[11px] text-muted">
              {bottomNavigation.map((item) => (
                <NavItem key={item.name} item={item} isBottom />
              ))}
            </nav>
          </div>
        </div>
        {/* Elemento espaciador que ocupa el mismo espacio que la sidebar pero no es visible */}
        <div
          className={cn(
            "hidden lg:block flex-shrink-0 transition-all duration-300 ease-in-out",
            isCollapsed ? "w-[72px]" : "w-63",
          )}
          aria-hidden="true"
        />
      </>
    </TooltipProvider>
  )
}

