import React, { useEffect, useState} from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../slices/productSlice";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

const ProductList = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.product.filteredProducts);
  const [page,setPage] = useState(1);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();
    console.log(data.products)
    dispatch(allProducts(data.products));
  };
  const handleSelectPage =(selectedPage)=>{
setPage(selectedPage)
  }

  useEffect(() => {
    fetchProducts();
  },[]); // Empty dependency array to call only once on mount

  return (
    <div className="product-list">
      <div className="container text-center product-wrapper">
        <div className="row">
          {filteredProducts?.length?filteredProducts?.slice(page*10-10,page*10).map((product) => (
            <Product key={product.id} product={product} />
          )) : <h1 style={{margin: "100px"}}> No products found under this category</h1>}
          </div>
          <div className="pagination-btn">
            <button onClick={()=>handleSelectPage(page-1)} className={(page > 1 ? "":"pagination_disable")}><GrFormPrevious /></button>
            <span>{
              [...Array(filteredProducts.length/10)].map((_,i)=> {return <span className="page-no" ><span className={page === i+1 ? 'selectedPage':''}key={i} onClick={()=>handleSelectPage(i+1)}>{i+1}</span></span> })}</span>
            <button onClick={()=>{handleSelectPage(page+1)}} className={(page < filteredProducts.length/10 )? "":"pagination_disable"}><MdOutlineNavigateNext /></button>
          </div>
      </div>
    </div>
  );
};

export default ProductList;
