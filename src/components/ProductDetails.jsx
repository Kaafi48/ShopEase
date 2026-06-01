import axios from "axios";
import  { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductSkeleton from "./ProductSkeleton";

const ProductDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [product , setProduct] = useState(null);
  const [mainImage, setMainImage] = useState();

    useEffect(() => {}, [id]);
    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
           
              setProduct(response.data);
              setMainImage(response.data.images[0]);
     
          } catch (error) {
            console.error("Error fetching product:", error);
          }
        };
        fetchProduct();
      }, [id]);
       if (!product) return <ProductSkeleton />
       
  return (
 
  <>
    {product && (
      <div className="">
        <button 
        onClick = {()=> navigate(-1)}
        className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg cursor-pointer flex items-center duration-300 ease-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 flex justify-center items-center mr-1"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
              clipRule="evenodd"
            />
          </svg>
          Go Back
        </button>

        {/* Qaybta Guud ee Sawirrada iyo Xogta */}
        <div className="flex flex-col md:flex-row mt-6 md:mt-12 gap-8">
          
          {/* Qaybta Bidix (Sawirka Weyn iyo Sawirrada Yaryar) */}
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            
            {/* Sawirka Weyn (Main Image) */}
            <div className="h-96 bg-gray-100 rounded-lg overflow-hidden flex justify-center items-center p-4">
              <img
            
                src={mainImage}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image Gallery */}
            <div className="flex gap-4 w-full overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-red-100">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all"
                >
                  <img
                    onClick={() => setMainImage(image)}
                    src={image}
                    alt={`${product.title} - ${index + 1}`}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </div>

          </div>

          {/* Qaybta Midig */}
          <div className="md:w-1/2 w-full">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
             <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xl font-semibold text-red-500">${product.price}</span>
                {/* <span className="text-sm text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</span>
                <span className="text-sm text-green-500 font-medium">{Math.round(((product.price * 1.2 - product.price) / (product.price * 1.2)) * 100)}% OFF</span> */}
                <span className="text-sm text-gray-500"> {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}  </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
              <div className="flex justify-between items-center gap-4 mt-6">
                <span className=" inline-block text-sm text-gray-500 mt-3 bg-red-400 py-1 px-4 rounded-md text-white">{product.category}</span>
                <p className="text-yellow-500">{`★`.repeat(Math.floor(product.rating))}{`☆`.repeat(5 - Math.floor(product.rating))} ({product.rating.toFixed(1)})</p>
              </div>

              <div className="flex gap-4 mt-6 ">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in w-full cursor-pointer">
                  Buy Now
                  </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in w-full cursor-pointer">
                 Add to Cart
                  </button>
                  </div>
          </div>

        </div>
      </div>
    )}
  </>
);
}
export default ProductDetails;