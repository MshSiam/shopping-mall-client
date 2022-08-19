import { Add, Remove } from "@material-ui/icons"
import React from "react"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`

const ImageContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0;
  line-height: 25px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  ${mobile({ width: "100%" })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200px;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: 0.4s;
  &:hover {
    background-color: teal;
    color: #fff;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImageContainer>
          <Image src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Flagship_100_Blog_2880x1800_Apparel.jpg" />
        </ImageContainer>

        <InfoContainer>
          <Title>Demo</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            ducimus officiis, explicabo aperiam mollitia veritatis dignissimos?
            Nemo nulla, reiciendis reprehenderit maxime odio saepe culpa
            pariatur consectetur aliquam amet repudiandae iure.
          </Desc>
          <Price>$ 20</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <Add style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Product
