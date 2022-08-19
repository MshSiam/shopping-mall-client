import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Room
} from "@material-ui/icons"
import React from "react"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0;
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const A = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.div`
  margin: 30px 0;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  cursor: pointer;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 60%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopping Mall</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          ipsum quibusdam commodi assumenda asperiores nisi deserunt, optio
          facere! Officia illo impedit, veniam quas corporis sit incidunt hic
          dolore magnam soluta.
        </Desc>
        <SocialContainer>
          <A
            href="https://www.facebook.com/seam.kenway/"
            target="_blank"
            color="3b5999">
            <Facebook />
          </A>
          <A
            href="https://www.instagram.com/siam_kenway/"
            target="_blank"
            color="e5505f">
            <Instagram />
          </A>
          <A
            href="https://www.linkedin.com/in/muhammad-siam-77703520b/"
            target="_blank"
            color="55acda">
            <LinkedIn />
          </A>
          <A href="https://github.com/MshSiam" target="_blank" color="000000">
            <GitHub />
          </A>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accesspries</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Whislist</ListItem>
          <ListItem>lorem</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Kalishema, Brahmanbaria
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +880 1765871554
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          siyamkenway@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
