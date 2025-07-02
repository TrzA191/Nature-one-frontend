
"use client";

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";


export const dataCarouselTop = [
  {
    id: 1,
    title: "Envío en 24/48 h",
    description: "Como cliente VIP, tus envíos en 24/48 horas. Obtén más info",
    link: "#!"
  },
  {
    id: 2,
    title: "Consigue hasta un -25% en compras superiores a 40€",
    description: "20 % al gastar 100 € o 25 % al gastar 150 €. Usa el código",
    link: "#!"
  },
  {
    id: 3,
    title: "Devoluciones y entregas gratuitas",
    description: "Como cliente, tienes envíos y devoluciones gratis en un pla",
    link: "#!"
  },
  {
    id: 4,
    title: "Comprar novedades",
    description: "Todas las novedades al 50% de descuento",
    link: "#!"
  }
];




const CarouselTextBanner = () => {
    const router = useRouter()
  return (
    <div className="bg-[var(--highlight-bg)]">
       <Carousel className="w-full max-w-4xl mx-auto" 
       plugins={[
          Autoplay({
            delay: 2500
            
          })
        ]}>
        <CarouselContent className="bg-navbar">
        {dataCarouselTop.map(({ id, title, description, link }) => (
          <CarouselItem key={id} onClick={() => router.push(link)}  className="cursor-pointer">
            <div>
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="flex flex-col justify-center  p-2 items-center text-center">
                  <p className="sm:text-lg text-wrap dark:text-secondary">
                    {title}
                    </p>
                    <p className="text-xs sm:text-sm text-warp dark:text-secondarys">{description}</p>
                </CardContent>

              </Card>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        
       </Carousel>
    </div>
  );
}

export default CarouselTextBanner;