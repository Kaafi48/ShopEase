
import { Link } from 'react-router-dom'
const ProductTem = ({ product }) => {
  return  (

    <Link 
          to={`/Product-details/${product.id}`}
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in cursor-pointer"
        >
          <div className="relative w-full h-40">
            <img
              src={product.thumbnail
}
              alt={product.title}
              className="w-full h-full object-cover border-b border-gray-200" 
            />
            <span className="absolute bottom-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.category}
            </span>
            <span className={`absolute top-2 left-2 ${product.stock > 0 ? 'bg-green-500' : 'bg-gray-500 rounded'} text-white text-xs font-bold px-2 py-1 rounded`}>
              {product.stock > 0 ? `${product.stock} In Stock` : "Out of Stock"}
            </span>

          </div>
          {/*  */}
          <div className="p-2 ">
            <h3 className="text-lg font-bold ">{product.title}</h3>
            <p className="text-yellow-500">{`★`.repeat(Math.floor(product.rating))}{`☆`.repeat(5 - Math.floor(product.rating))}</p>
          </div>

          <p className="text-gray-600  pl-2 truncate">{product.description}</p>
          <p className="text-xl font-bold p-2">$ {product.price.toFixed(2)}</p>

          <div className="flex justify-between pb-3 px-2 cursor-pointer">
            <button className="bg-blue-500 text-white text-sm  p-2 rounded hover:bg-blue-600 transition-colors      duration-300 ease-in">
              Buy Now
            </button>
            <button className="bg-blue-500 text-white p-2 text-sm rounded hover:bg-blue-600 transition-colors      duration-300 ease-in cursor-pointer">
              Add to Cart
            </button>
          </div>
      </Link>
  )
}

export default ProductTem;