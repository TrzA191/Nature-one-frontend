import { useRouter } from "next/navigation";
import { getImageUrl } from "@/lib/utils";


interface ProductImageMiniatureProsps{
    slug:string,
    url:string
}

const ProductImageMiniature = (props:ProductImageMiniatureProsps) =>{
    const {slug, url} = props
    const router = useRouter()


    return(
        <div onClick={()=> router.push(`/product/${slug}`)} className="cursor-pointer">
            {url ? (
                <img src={getImageUrl(url)}
                 alt="Product" 
                 className="w-24 h-24 overflow-hidden rounded-3xl sm:w-auto sm:h-32 object-cover"
                 />
            ) : (
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400 text-xs">
                    Sin imagen
                </div>
            )}
        </div> 
    );
}

export default ProductImageMiniature;