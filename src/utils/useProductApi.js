import{ React, useEffect} from 'react'
import { allProducts } from "../slices/productSlice";
import { useDispatch } from "react-redux";


const useProductApi = () => {
    useEffect(() => {
        fetchProducts();
      },[]); // Empty dependency array to call only once on mount
  const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const data = await response.json();
        console.log(data.products)
        dispatch(allProducts(data.products));
      };
      return
}

export default useProductApi
