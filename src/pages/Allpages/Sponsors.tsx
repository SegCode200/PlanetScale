import React from 'react'
import { styled } from 'styled-components'
import pic from "../../assets/1_e8c24bbd-3076-4fdd-b606-94ce948275de.svg"
import pic1 from "../../assets/2_04d4c5ed-26a8-41cd-bffa-ab8708711cda.svg"
import pic2 from "../../assets/3_d0e139c4-625f-4009-8aeb-4cc1e1ff5e67.svg"
import pic3 from "../../assets/4_f96f74cc-aff0-49f5-abd9-0e41f9762b92.svg"
import pic4 from "../../assets/5_68ee4305-268c-4deb-8c0e-43bd53a16629.svg"
import pic5 from "../../assets/6_6cca77fe-13ab-4359-8ded-41737318517c.svg"
import pic6 from "../../assets/7_8a2e2070-1c84-43e0-8ced-325b5dad522d.svg"

const Sponsors = () => {
  return (
    <div>
        <Container>
            <Main>
                <Text>
                PlanetScale is trusted by
                </Text>

                <ImageHolder>
                    <Image src={pic}/>
                    <Image src={pic1}/>
                    <Image src={pic2}/>
                    <Image src={pic3}/>
                    <Image src={pic4}/>
                    <Image src={pic5}/>
                    <Image src={pic6}/>

                </ImageHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Sponsors
const Image = styled.img`
margin:  20px;
/* object-fit: cover; */
width: 120px;
height: 40px;
`
const ImageHolder = styled.div`
width: 60%;
display: flex;
justify-content: center;

flex-wrap: wrap;
`
const Text = styled.div`
margin: 20px 0;
`
const Main = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Container = styled.div`
width: 100%;
height: 300px;
/* padding: 30px; */
display: flex;
align-items: center;
justify-content: center;
`
