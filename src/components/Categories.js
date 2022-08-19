import React from "react"
import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"
import { mobile } from "../responsive"

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`

const Catagories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item}></CategoryItem>
      ))}
    </Container>
  )
}

export default Catagories
