import React, { useState } from 'react'
import styled from 'styled-components'
import {HiArrowNarrowRight} from "react-icons/hi"
import {IoIosArrowForward} from "react-icons/io"


interface iData {
  text: string
}

const ButtonProps:React.FC<iData> = ({text}) => {

  const[Hover, setHover] = useState<boolean>(false)
  const onHover=()=>{
      setHover(!Hover)
  }
  return (
    <div>
      <Container>
        <Main>
          <Text
            onMouseEnter={()=>
              onHover()
          }
          onMouseLeave={()=>
              onHover()
          }
          >{text}{
            Hover ? <Icon1 style={{transition: "all 50ms"}}/> : <Icon style={{transition: "all 50ms"}}/>
          }</Text>
        </Main>
      </Container>
    </div>
  )
}

export default ButtonProps
const Icon1 = styled(HiArrowNarrowRight)`
margin: 0 20px;
transition: all 50ms;
color: #F15733
`
const Icon = styled(IoIosArrowForward)`
margin: 0 20px;
transition: all 50ms;
color: #F15733

`
const Text = styled.div`
display: flex;
align-items: center;
font-size: 16px;
font-weight: 500;
`
const Main = styled.div``
const Container = styled.div``