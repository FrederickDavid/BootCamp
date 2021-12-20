import React from 'react'
import styled from 'styled-components'
import images from "../BOOT/laptops.png"
// import {app} from "../base"
import {useParams, useNavigate} from "react-router-dom"

const EditProduct = () => {
    
    const [avatar, setAvatar] = React.useState("")
    const [image, setImage] = React.useState(images)

    const imageUpload = async (e) => {
        const file = e.target.files[0];
        const save = URL.createObjectURL(file)
        setImage(save)
    }

    // const navigate = useNavigate()
    // const {id} = useParams()
    // const pushData = async ()=>{
    //     await app.firestore().collection("Products").doc(id).update({
    //         image,
    //         producttype,
    //         productname,
    //         description,
    //         avatar,
    //         price
    //     })
    // navigate("/AdminDashboard")
    // }
    return (
      <Container>
          <span>Edit Products</span>
          <Card>
              <Images src={image}/>
                    <Upload htmlFor="pix">Upload Image</Upload>
                    <input type="file" id="pix" style={{display: "none"}} 
                    onChange={imageUpload}/>
                    <InputTab>
                <Text>Edit Product Type</Text>
                <Input placeholder="Desktop" 
                />
                </InputTab>
                    <InputTab>
                <Text>Edit Product Name</Text>
                <Input placeholder="Dell, Hp" 
                />
                </InputTab>
                    <InputTab2>
                <Text>Description</Text>
                <Inputs placeholder="Windows 10, 8th generation 16GB RAM, 650GB SSD" 
                />
                </InputTab2>
                <InputTab>
                <Text>Price</Text>
                <Input placeholder="110,000" 
                />
                </InputTab>
                <Add >Edit</Add>
          </Card>
      </Container>
    )
}

export default EditProduct
const Add = styled.div `
width: 25%;
height: 40px;
margin-top: 15px;
margin-bottom: 15px;
background-color: #0044FF;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-weight: bold;
border-radius: 4px;
transition: all 350ms;
transform: scale(1);
:hover{
    cursor: pointer;
    transform: scale(1.012);
    background-color: #0A9DFF;
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
`
const InputTab2 = styled.div `
width: 95%;
height: auto;
/* background-color: lightgray; */
margin-top: 7px;
display: flex;
flex-direction: column;
align-items: center;
`
const InputTab = styled.div `
width: 95%;
height: 20%;
/* background-color: lightgray; */
margin-top: 7px;
display: flex;
flex-direction: column;
align-items: center;
`
const Text = styled.div `
width: 100%;
height: auto;
font-size: 13px;
font-weight: bold;
margin-bottom: 2px;
`
const Inputs = styled.textarea `
width: 99%;
height: 80px;
outline: none;
border-radius: 4px;
border: 1px solid grey;
resize: none;
`
const Input = styled.input `
width: 99%;
height: 30px;
outline: none;
border-radius: 4px;
border: 1px solid grey;
`
const Images = styled.img `
width: 150px;
height: 100px;
/* background-color: lightgray; */
border-radius: 5px;
border: 1px solid grey;
margin-bottom: 10px;
object-fit: cover;
margin-top: 20px;
transform: scale(1);
transition: all 350ms;
:hover{
    /* cursor: pointer; */
    transform: scale(1.014);
    background-color: #F3F4F6;
    box-shadow: 2px 2px 5px 0 rgba( 31, 38, 135, 0.37 );
}
`
const Upload = styled.label `
width: 230px;
height: 30px;
color: white;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50px;
margin-bottom: 10px;
background-color: red;
cursor: pointer;
transform: scale(1);
:hover{
    transform: scale(1.02);
    background-color: darkred;
}
`

const Card = styled.div `
width: 350px;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* background-color: gray; */
border: 1px solid lightgray;
border-radius: 5px;
box-shadow: 2px 2px 5px 0 rgba( 31, 38, 135, 0.37 );
margin-top: 20px;
margin-bottom: 40px;
@media screen and (max-width: 500px) and (min-width: 300px){
width: 300px;
height: auto; 
}
`

const Container = styled.div `
width: 100%;
height: calc(100auto - 130px);
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
span{
    margin-top: 120px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 40px;
    font-family: Roboto Slab;
}
@media screen and (max-width: 768px) and (min-width: 300px){
    span{
    margin-top: 90px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 30px;
    font-family: Roboto Slab;
}
}
`