import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch } from 'react-redux';
import { filteredProducts, sortProducts } from '../slices/productSlice';

const FilterComponent = () => {
const dispatch = useDispatch();

const handleSelect = (eventKey) =>{
dispatch(filteredProducts(eventKey));
}

const handleSortSelect = (eventKey) =>{
  dispatch(sortProducts({ sortBy: eventKey }))
}
  return (
    <div className='dropdown-container'>
    <div className='dropdown'>
      <DropdownButton id="dropdown-basic-button" title="Filter Products" variant="Secondary" onSelect={handleSelect}>
      <Dropdown.Item eventKey="beauty">Beauty</Dropdown.Item>
      <Dropdown.Item eventKey="fragrances">Fragrances</Dropdown.Item>
      <Dropdown.Item eventKey="furniture">Furniture</Dropdown.Item>
      <Dropdown.Item eventKey="groceries">Groceries</Dropdown.Item>
      <Dropdown.Item eventKey="electronics">Electronics</Dropdown.Item>
    </DropdownButton> 
    <DropdownButton
        id="dropdown-basic-button"
        title="Sort by: Featured"
        variant="Secondary"
        onSelect={handleSortSelect}
      >
        <Dropdown.Item eventKey="priceLowToHigh">Price: Low to High</Dropdown.Item>
        <Dropdown.Item eventKey="priceHighToLow">Price: High to Low</Dropdown.Item>
        <Dropdown.Item eventKey="customerReview">Avg. Customer Review</Dropdown.Item>
        <Dropdown.Item eventKey="newestArrival">Newest Arrival</Dropdown.Item>
        <Dropdown.Item eventKey="bestSellers">Best Sellers</Dropdown.Item>
      </DropdownButton>
    </div>
    </div>
  )
}

export default FilterComponent
