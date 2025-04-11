"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import '../styles/Home.css'

const Fondocarousel_1 = new URL('../assets/images/componentes/Carrousel/Fondo-1.jpg', import.meta.url).href;
const Fondocarousel_2 = new URL('../assets/images/componentes/Carrousel/Fondo-2.jpg', import.meta.url).href;
const Fondocarousel_3 = new URL('../assets/images/componentes/Carrousel/Fondo-3.jpg', import.meta.url).href;
const Fondocarousel_4 = new URL('../assets/images/componentes/Carrousel/Fondo-4.png', import.meta.url).href;

const carouselItems = [
  {id: 1, image: Fondocarousel_1,},
  {id: 2, image: Fondocarousel_2,},
  {id: 3, image: Fondocarousel_3,},
  {id: 4, image: Fondocarousel_4,},
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  return (
    <div className="relative w-[100%] h-[340px] overflow-hidden rounded-md shadow-lg cursor-pointer carrusel">
      {/* Carousel items */}
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-500 ease-in-out",
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-black/60">
            <img src={item.image || "/placeholder.svg"} 
                 alt={item.title} 
                 className="w-full h-full" />
          </div>
        </div>
      ))}

      {/* Botones de navegacion */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full hover:bg-black/50 z-20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full hover:bg-black/50 z-20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-white w-4" : "bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel

