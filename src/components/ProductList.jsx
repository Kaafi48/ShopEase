
import ProductTem from "./ProductTem";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";


const ProductList = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
useEffect(() => {
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://dummyjson.com/products");
      
     
        setProducts(response.data.products);
        setLoading(false);

     
    } catch (error) {
        setLoading(false);
      console.error('Error fetching products:', error);
    }
  };

  fetchProducts(); 
}, []);

 if (loading) return <ProductLoadingSkeleton />;
return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 ">
    {products.map((product) => (
      <ProductTem key={product.id} product={product} />
    ))}
    </div>
  );
};

export default ProductList;
