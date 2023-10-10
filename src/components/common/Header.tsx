import React, { useState } from 'react'
import ButtonProps from '../reuse/ButtonProps'
import styled from 'styled-components'
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import pics from "../../assets/logo.svg"
import pics1 from "../../assets/2.svg"
import pics2 from "../../assets/fitness pal.jpeg"
import {SiEnterprisedb} from "react-icons/si"


const Header = () => {

  const[Hover, setHover] = useState<boolean>(false)
  const onHover=()=>{
      setHover(!Hover)
  }
  const[Hover1, setHover1] = useState<boolean>(false)
  const onHover1=()=>{
      setHover1(!Hover1)
  }
  const[Hover2, setHover2] = useState<boolean>(false)
  const onHover2=()=>{
      setHover2(!Hover2)
  }
  return (
    <div>
      <Container>
        <Main>
         <Wrapper>
         <LogoHolder>
            <Logo src={pics}/>
          </LogoHolder>

          <NavHolder>
            <Nav 
              onMouseEnter={()=>
                onHover()
            }
            onMouseLeave={()=>
                onHover()
            }
            >Products 
             {
                            Hover ? <Icon1/> : <Icon/>
                        }
                        {
                          Hover ? 
                          <Div>
                            <Left>
                              <SmallText>What is<br/> PlanetScale</SmallText>
                              <ButtonProps text='Learn More'/>
                            </Left>
                     <div>
                     <Right>
                              <ImageHolder>
                                <Image src={pics1}/>
                              </ImageHolder>
                               <div >
                               <Text>PlanetScale Boost</Text>
                                <Sub>Up to 1000x faster queries in just a few clicks</Sub>
                                
                               </div>

                            </Right>
                            <Right>
                              <ImageHolder>
                                <Image src={pics1}/>
                              </ImageHolder>
                               <div >
                               <Text>PlanetScale Boost</Text>
                                <Sub>Up to 1000x faster queries in just a few clicks</Sub>
                                
                               </div>

                            </Right>
                            <Right>
                              <ImageHolder>
                                <Image src={pics1}/>
                              </ImageHolder>
                               <div >
                               <Text>PlanetScale Boost</Text>
                                <Sub>Up to 1000x faster queries in just a few clicks</Sub>
                                
                               </div>

                            </Right>
                            <Line/>
                               <Butt>
                               <ButtonProps text='PlanetScale for AI'/>
                               </Butt>
                     </div>
                          </Div> 
                          : null
                        }
            </Nav>
            <Nav
              
               onMouseEnter={()=>
                 onHover1()
             }
             onMouseLeave={()=>
                 onHover1()
             }

            >Solutions 
              {
                            Hover1 ? <Icon1/> : <Icon/>
                        }

                        {
                          Hover1 ?
                          <Div1>
                            <Left1>
                              <Up>
                                <ButtonProps text='Customers'/>
                              </Up>

                              <Down>
                                <ImageHolder1>
                                  <Image1 src={pics2}/>
                                </ImageHolder1>
                                <div>
                                  <Text1>Featured case study</Text1>
                                  <Text2>MyFitnessPal</Text2>
                                  <Note>MyFitnessPal chose PlanetScale  <br/> to focus on their  data, not the database.</Note>
                                  <ButtonProps text='Learn more'/>
                                </div>
                              </Down>

                            </Left1>

                            <Right1>
                           <div style={{display: "flex", margin: "10px 0"}}>
                           <Icon2><SiEnterprisedb size={30} style={{marginRight: "10px"}}/></Icon2>
                              <div>
                                <Text>Enterprise</Text>
                                <Sub>for data intensive application at scale</Sub>
                              </div>
                           </div>
                           <div style={{display: "flex", margin: "10px 0"}}>
                           <Icon2><SiEnterprisedb size={30} style={{marginRight: "10px"}}/></Icon2>
                              <div>
                                <Text>Enterprise</Text>
                                <Sub>for data intensive application at scale</Sub>
                              </div>
                           </div>
                           <div style={{display: "flex", margin: "10px 0"}}>
                           <Icon2><SiEnterprisedb size={30} style={{marginRight: "10px"}}/></Icon2>
                              <div>
                                <Text>Enterprise</Text>
                                <Sub>for data intensive application at scale</Sub>
                              </div>
                           </div>
                           

                            </Right1>

                          </Div1>
                           :null
                        }
            </Nav>
            <Nav 
                onMouseEnter={()=>
                  onHover2()
              }
              onMouseLeave={()=>
                  onHover2()
              }
            >Resources
                     {
                            Hover2 ? <Icon1/> : <Icon/>
                        }

                        {
                          Hover2 ?
                          <Div1>
                            <Left1>
                              <Up>
                                <ButtonProps text='Customers'/>
                              </Up>

                              <Down>
                                <ImageHolder1>
                                  <Image1 src={pics2}/>
                                </ImageHolder1>
                                <div>
                                  <Text1>Featured case study</Text1>
                                  <Text2>MyFitnessPal</Text2>
                                  <Note>MyFitnessPal chose PlanetScale  <br/> to focus on their  data, not the database.</Note>
                                  <ButtonProps text='Learn more'/>
                                </div>
                              </Down>

                            </Left1>

                            <Right1>
                           <div style={{display: "flex", margin: "10px 0"}}>
                           <Icon2><SiEnterprisedb size={30} style={{marginRight: "10px"}}/></Icon2>
                              <div>
                                <Text>Enterprise</Text>
                                <Sub>for data intensive application at scale</Sub>
                              </div>
                           </div>
                           <div style={{display: "flex", margin: "10px 0"}}>
                           <Icon2><SiEnterprisedb size={30} style={{marginRight: "10px"}}/></Icon2>
                              <div>
                                <Text>Enterprise</Text>
                                <Sub>for data intensive application at scale</Sub>
                              </div>
                           </div>
                           <div style={{display: "flex", margin: "10px 0"}}>
                           <Icon2><SiEnterprisedb size={30} style={{marginRight: "10px"}}/></Icon2>
                              <div>
                                <Text>Enterprise</Text>
                                <Sub>for data intensive application at scale</Sub>
                              </div>
                           </div>
                           

                            </Right1>

                          </Div1>
                           :null
                        }

             </Nav>
            <Nav>Documentation <Icon/></Nav>
            <Nav>Pricing</Nav>
          </NavHolder>
         </Wrapper>

         <Wrapper1>
          <Contact>Contact</Contact>
          <Contact>Sign in </Contact>
          <Button>
            Get Started
          </Button>
         </Wrapper1>

        </Main>
      </Container>
    </div>
  )
}

export default Header

const Icon2 = styled.div`

`
const Note = styled.div`
font-size: 13px;
margin: 20px 0;

`
const Text2 = styled.div`
margin: 5px 0;
font-size: 16px;
`
const Text1 = styled.div`
font-size: 13px;
font-weight: 500;
margin: 10px 0;
color: #F15733
`
const Image1 = styled.img`
object-fit: cover;
width: 280px;
height: 150px;
border-radius: 4%;
`
const ImageHolder1 = styled.div`
width: 200px;
height: 200px;


`
const Down = styled.div`
margin-top: 10px;
display: flex;
width: 100%;
justify-content: space-between;
`

const Up = styled.div`
padding: 10px;
border-bottom: 1px solid silver;
`
const Right1 = styled.div`
flex: 1;
/* display: flex; */
padding: 20px ;
`
const  Left1 = styled.div`
width: 65%;
border-right: 1px solid silver;
background-color: #FAFAFA;
padding:   20px;
`
const  Div1 = styled.div`
position: absolute;
width: 800px;
height: 250px;
top: 30px;
overflow: hidden;
display: flex;

border-radius: 10px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`
const  Butt = styled.div`
padding:   20px;
`
const  Line = styled.div`
border-top: 0.2px solid silver;
/* padding:   20px; */
`
const  Sub = styled.div`
font-size: 13px;
color: #6b6b6b;
`
const  Text = styled.div`

`
const  Image = styled.img`
border-radius: 10px;
object-fit: cover;
width: 50px;
height: 50px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 40px -7px;
`
const  ImageHolder = styled.div`
border: 1px solid silver;
border-radius: 10px;
width: 50px;
height: 50px;
padding: 3px;
margin-right: 15px ;

`
const  Right = styled.div`
flex: 1;
display: flex;
padding: 20px ;
`
const  SmallText = styled.div`
font-size: 17px;
margin-bottom: 20px;
`
const  Left = styled.div`
width: 40%;
border-right: 1px solid silver;
background-color: #FAFAFA;
padding:   20px;
`
const  Div = styled.div`
position: absolute;
width: 600px;
height: 350px;
top: 30px;
overflow: hidden;
display: flex;

border-radius: 10px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

`
const  Button = styled.div`
border: 1px solid #F15733 ;

border-radius: 20px;
padding: 10px;

`
const  Contact = styled.div`
margin: 0 10px;
`
const Wrapper1 = styled.div`
display: flex;
align-items: center;
`
const Icon1 = styled(IoIosArrowUp)`
font-size: 15px;
cursor: pointer;
margin: 0px 8px;


`
const Icon = styled(IoIosArrowDown)`
font-size: 15px;
margin: 0px 8px;
cursor: pointer;

`
const Nav = styled.div`
margin: 0 10px;
align-items: center;
display: flex;
cursor: pointer;
font-size: 15px;
position: relative;


`
const NavHolder = styled.div`
display: flex;
`
const Logo = styled.img`
width: 30px;
`
const LogoHolder = styled.div`
margin-right: 30px;
display: flex;
align-items: center;

`
const Wrapper = styled.div`
display: flex;
`
const Main = styled.div`
display: flex;
align-items: center;
width: 90%;
height: 100%;
justify-content: space-between;
`
const Container = styled.div`
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
z-index: 10;
`