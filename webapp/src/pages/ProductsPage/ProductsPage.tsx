import React, { useEffect, useState } from "react";
import { getProducts } from "../ApiHelper";
import PageWrapper from '../PageWrapper';
import { Product, ProductData } from "../../components/interfaces";

const ProductsPage = () => {
  /*
    TODO:
      When the drag ends we want to keep the status persistant across logins. 
      Instead of modifying the data locally we want to do it serverside via a post
      request
  */
      const [productList, setproductList] = useState<Product[]>([]);
      const [errorOccured, setErrorOccured] = useState(false);
    
      useEffect(() => {
        async function fetchData() {
          const { productList, errorOccured } = await getProducts();
          setproductList(productList);
          setErrorOccured(errorOccured);
        }
        fetchData();
      }, []);
  
    
  return (
    <PageWrapper>
      
      <h1 className="text-3xl font-bold text-white">
        Product Page 
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          productList.map(product => (
            <div key={product.ProductID} className="relative">
              <img src={product.ProductPhotoURL} alt={product.ProductName} className="w-full h-full object-cover rounded-md transition duration-500 ease-in-out transform hover:scale-110" />
              <div className="absolute bottom-0 left-0 w-full px-6 py-4 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-lg font-bold text-white">{product.ProductName}</h2>
                <p className="text-gray-300">{product.ProductStatus}</p>
              </div>
            </div>
          ))
        }
      </div>
    </PageWrapper>
  );
};

export default ProductsPage
