import { Carousel,CarouselContent,CarouselItem, CarouselPrevious, CarouselNext} from "@/components/ui/carousel";
import { getImageUrl } from "@/lib/utils";

interface CarouselProductProps {
  images: {
    id: number;
    url: string;
  }[];
}


const CarouselProduct = (props:CarouselProductProps)=> {
    const {images} = props
    return(
        <div className="sm:px-16"> 
            <Carousel>
                <CarouselContent>
                    {Array.isArray(images) && images.length > 0 ? (
                        images.map((image) =>(
                            <CarouselItem key={image.id}>
                                <img src={getImageUrl(image.url)}
                                alt="image product" className="rounded-3xl" />
                            </CarouselItem>
                        ))
                    ) : (
                        <CarouselItem>
                            <div className="w-full h-96 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400">
                                Sin imagen
                            </div>
                        </CarouselItem>
                    )}
                </CarouselContent>
                
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>

        </div>
    )
}

export default CarouselProduct;