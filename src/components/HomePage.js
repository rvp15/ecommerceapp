import React from 'react'
import CarouuselComponent from './CarouuselComponent'
import FilterComponent from './FilterComponent'
import ProductList from './ProductList'

const HomePage = () => {
  return (
    <div>
      <CarouuselComponent/>
      <FilterComponent/>
      <ProductList/>
    </div>
  )
}

export default HomePage
