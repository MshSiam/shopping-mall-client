import React from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Products from "../components/Products"
import { mobile } from "../responsive"

const Container = styled.div``
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`
const Title = styled.h1`
  ${mobile({
    textAlign: "center",
    margin: "20px 0"
  })}
`

const FilterText = styled.span`
  font-size: 20px;
  margin-right: 20px;
  font-weight: 600;
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "15px 0" })}
`
const Option = styled.option``

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2]

  const [filter, setFilter] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilter = (e) => {
    const value = e.target.value
    setFilter({
      ...filter,
      [e.target.name]: value
    })
  }
  console.log(filter)

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product : </FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Product : </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default ProductList
