import React from 'react'
import styled from 'styled-components'
import data from "./data.json"
import { useParams } from 'react-router-dom'


const Detailed = () => {

    const {id} = useParams();
    const items = data[id-1];
    console.log(items)
    return (
        <Container>
        <span>More Details</span>
            <Wrapper>
                 {/* <Card> */}
                 <Images>
                     <Image src={items.image}/>
                 </Images>
                 <Title>{items.title}
                 <Desc>{items.description}
                 </Desc>
                 </Title>
                 
             {/* </Card> */}
            </Wrapper>
        </Container>
    )
}

export default Detailed


const Container = styled.div `
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;

span{
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    margin: 20px 0;
    text-transform: uppercase;
}
`
const Wrapper = styled.div `
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
margin-top: 10px;
justify-content: center;
flex-direction: row;
`

const Images = styled.div `
width: 40%;
height: 50%;
border-radius: 10px;
background-color: aliceblue;
margin: 10px 0;
`
const Image = styled.img `
width: 100%;
height: 100%;
border-radius: 10px;
`

const Title = styled.div `
width: 50%;
height: 50px;
margin-top: 50px;
text-align: center;
text-transform: uppercase;
display: flex;
align-items: center;
justify-content: center;
font-size: 40px;
font-weight: bold;
flex-direction: column;
`
const Desc = styled.div `
width: 55%;
height: 40%;
text-align: left;
font-size: 12px;
margin-top: 50px;
`