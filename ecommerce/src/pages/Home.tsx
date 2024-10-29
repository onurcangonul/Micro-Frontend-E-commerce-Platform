import React from 'react'
const ProductList = React.lazy(() => import("productListing/ProductListing"));

const Home = () => {
  return <ProductList/>
}

export default Home