import React from 'react'
import styled from 'styled-components'
import {app} from "../base"
import {NavLink, useNavigate} from "react-router-dom"
import images from "./images.png"

const AddScreen = () => {
    const navigate = useNavigate()
    const [quote, setQuote] = React.useState("")
    const [author, setAuthor] = React.useState("")
    const [avatar, setAvatar] = React.useState("")
    const [image, setImage] = React.useState(images)
    const pushData = async ()=>{
        await app.firestore().collection("Quotes").add({
            quote,
            author,
        })
    navigate("/")
    }

    const imageUpload = async (e) => {
        const file = e.target.files[0];
        const save = URL.createObjectURL(file)
        setImage(save)
         const fileRef = app.storage().ref()
         const storageRef = fileRef.child("image/" + file.name).put(file)
         storageRef.on(firebase.storage.TaskEvent.STATE_CHANGED, ((snapshot)=>{
                 const count = (snapshot.bytesTransferred/snapshot.totalBytes)*100
                 console.log(count)
         }),(error)=>{
             console.log(error.message)
         },()=>{
             storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                 console.log(url)
                 setAvatar(url)
             })
         })
     }



    return (
        <Container>
            <Card>
                <Image src={image}/>
                <Label htmlFor="pix">Uploads author's image</Label>
                <ImageInput type="file" id="pix" onChange={imageUpload}/>

                <InputTab>
                <Text>Quote</Text>
                <Input placeholder="Enter your quote" 
                 value={quote}
                 onChange={(e)=>{
                     setQuote(e.target.value)
                 }} 
                />
                </InputTab>
                <InputTab>
                <Text>Author</Text>
                <Input placeholder="The name of author"
                value={author}
                onChange={(e)=>{
                    setAuthor(e.target.value)
                }}
                />
                </InputTab>
                <Add to="/"
                onClick={()=>{
                    pushData()
                }}>Add</Add>
            </Card>
        </Container>
    )
}

export default AddScreen

const ImageInput = styled.input `
width: 85%;
margin-top: 10px;
display: none;
background-color: transparent;
border: none;
`
const Label = styled.label `
width: 90%;
height: 30px;
background-color: red;
border-radius: 15px;
color: white;
font-size: 13px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 5px;
transition: all 350ms;
transform: scale(1);
:hover{
    cursor: pointer;
    transform: scale(0.99);
}
`

const Image = styled.img `
width: 25%;
height: 70px;
border-radius: 50px;
border: 1px solid black;
background-color: turquoise;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
`

const Add = styled.div `
width: 30%;
height: 40px;
background-color: red;
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
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
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
const Input = styled.input `
width: 95%;
height: 50%;
outline: none;
border-radius: 4px;
border: 1px solid grey;
`

const Container = styled.div `
width: 100%;
height: auto;
/* background-color: white; */
margin-top: 50px;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`
const Card = styled.div `
width: 20%;
height: 350px;
border-radius: 6px;
/* background-color: red; */
margin: 30px;
display: flex;
align-items: center;
flex-direction: column;
border: 1px solid grey;
/* transition: all 350ms;
transform: scale(1); */
:hover{
    cursor: pointer;
    /* transform: scale(1.012); */
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
`