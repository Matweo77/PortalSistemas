"use client"
import FloatingPaths from "@/themes/BackgroundPaths" 


export default function Pagos({
  className = "w-full h-80vh text-slate-950 dark:text-white",
}) {


  return (
    <div className="absolute inset-0 pointer-events-none border-2">
      <svg className={className} viewBox="0 0 696 316" fill="none">
        {/* Animación de rayas de fondo */}
              <div className="absolute inset-0 overflow-hidden">
                <FloatingPaths position={1} pathCount={24} color="#0066cc" className="w-full h-full opacity-20" />
                <FloatingPaths position={-1} pathCount={24} color="#003366" className="w-full h-full opacity-15" />
            </div>
      </svg>
    </div>
  )
}
