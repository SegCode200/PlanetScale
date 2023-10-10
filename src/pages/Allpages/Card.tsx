import React from 'react'
import ButtonProps from '../../components/reuse/ButtonProps'
import styled from 'styled-components'
import pics from "../../assets/1_d616899a-5e2f-4d62-a93e-8a324b137bc2.svg"
import pics1 from "../../assets/1_e18ecc17-749e-404a-9582-11c75701d2e7.svg"

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
                        <Image src={pics1}/>
                    </ImageHolder>
                </Right>
                </Holder>
                <Holder style={{backgroundImage: `url(${pics})` }}>
                <Left>
                <Button>New</Button>
                <Text>Planet Severless Drive for Javascript</Text>
                <Text1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem perferendis excepturi sapiente accusamus alias! Nihil voluptates doloribus molestiae.</Text1>
                <ButtonProps text='Check out the repo'/>
                </Left>
                <Right>
                    <ImageHolder>
                        <Image src={pics1}/>
                    </ImageHolder>
                </Right>
                </Holder>
            </Main>
        </Container>
    </div>
  )
}

export default Card
const Image = styled.img`
border-radius: 20px;
background-color: rgba(43, 43, 43, 0.7);
`
const ImageHolder = styled.div`
border-radius: 20px;
height: 100px;
width: 100px;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(43, 43, 43, 0.7);
padding: 3px;
`
const Right = styled.div`
margin-right: 10px;
`
const Text1 = styled.div`
color: #8a8a8a;
margin: 20px 0;
`
const Text = styled.div`
margin: 15px 0;
`
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
display: flex;
border-radius: 10px;
margin: 0 10px;
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