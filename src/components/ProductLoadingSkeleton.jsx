 

const ProductLoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        Array(6).fill(1).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="w-full h-40 h-48 bg-gradient-to-r from-gray-300 to-gray-400"></div>
            <div className="w-3/4 h-6 bg-gray-300 mt-4 mx-2 rounded"></div>
            <div className="w-1/2 h-6  bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse m-2"></div>
            <div className="w-1/2 h-6  bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse m-2"></div>
          </div>
        ))
      }
    </div>
  )
}

export default ProductLoadingSkeleton;
