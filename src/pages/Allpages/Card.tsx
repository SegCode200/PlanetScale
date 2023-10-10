import React from 'react'
import ButtonProps from '../../components/reuse/ButtonProps'
import styled from 'styled-components'
import pics from "../../assets/1_d616899a-5e2f-4d62-a93e-8a324b137bc2.svg"

const Card = () => {
  return (
    <div>
        <Container>
            <Main>
                <Holder style={{backgroundImage: `url(${pics})` }}>
                <Left>
                <Button>New</Button>
                <Text>Planet Severless Drive for Javascript</Text>
                <Text1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem perferendis excepturi sapiente accusamus alias! Nihil voluptates doloribus molestiae.</Text1>
                <ButtonProps text='Check out the repo'/>
                </Left>
                <Right>
                    <ImageHolder>
                        <Image/>
                    </ImageHolder>
                </Right>
                </Holder>
            </Main>
        </Container>
    </div>
  )
}

export default Card
const Image = styled.div``
const ImageHolder = styled.div``
const Right = styled.div``
const Text1 = styled.div``
const Text = styled.div``
const Button = styled.div`
width: 50px;
height: 30px;
font-size: 13px;
font-weight: 500;
color: green;
border: 1px solid green;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
`
const Left = styled.div`
color: white;
`
const Holder = styled.div`
width: 550px;
padding: 20px;
height: 200px;
border-radius: 10px;
background-color: #121212;
`
const Main = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`
const Container = styled.div`
width: 100%;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
`