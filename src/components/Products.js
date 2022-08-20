import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import Product from "./Product"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/products?category=coat`
        )
        setProducts(res.data)
        // console.log(res)
      } catch (error) {}
    }
    getProducts()
  }, [cat])

  return (
    <Container>
      {products &&
        products.map((item) => <Product key={item._id} item={item} />)}
    </Container>
  )
}

export default Products
