import React from 'react'
import ButtonProps from '../../components/reuse/ButtonProps'
import styled from 'styled-components'
import pics from "../../assets/2023-social-card.jpeg"

const Hero = () => {
  return (
    <div>
        <Container>
            <Main>
                <BigText>PlanetScale is the world’s most<br/> advanced MySQL platform</BigText>

                <Div>
                    <Butt>
                        <ButtonProps text='Get Started'/>
                    </Butt>
                    <ButtonProps text='Schedule a demo'/>
                </Div>

                <ImageHolder>
                    <Image src={pics}/>
                </ImageHolder>
            </Main>
        </Container>

    </div>
  )
}

export default Hero
const Image = styled.img`
width: 100%;
`
const ImageHolder = styled.div `
width: 100%;
height: 100%;
`
const Butt = styled.div`
padding: 10px;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid silver;
margin-right: 40px;
`
const Div = styled.div`
margin-left: 80px;
display: flex;
margin-top: 30px;
align-items: center;
`
const BigText = styled.div`
font-size: 40px;
font-weight: 600;
margin-left: 80px;
`
const Main = styled.div`

`
const Container = styled.div`
width: 100%;
/* height: 500px; */
display: flex;
margin-top: 150px;

`