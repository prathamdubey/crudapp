import { FormControl, FormGroup, InputLabel ,Input, Typography , styled, Button } from "@mui/material";
import { useState } from "react";
import { editUser, getUser } from "../service/api.js";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 10% auto 0 auto;
    & > div{
        margin-top: 20px;
        
    }
`

const defaultValue ={
    name: '',
    username:'',
    email: '',
    phone:''
}

const EditUser = () => {

    const [user, setUser ]= useState(defaultValue)

    const navigate =useNavigate();
    const {id}=useParams();

    useEffect(() => {
        loadUserDetais();
    }, [ ] )
 
    const loadUserDetais = async () => {
        const response = await getUser(id);
        setUser(response.data);
    }


    const onValueChange =(e)=>{
        console.log(e.target.name,e.target.value)
        setUser({...user,[e.target.name]: e.target.value})
    }

    const editUserDetails = async () => {
       await editUser(user, id)
       navigate(`/all`)
    }
    return(
       <Container>
        <Typography variant="h4">EditUser</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)}  name="username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>            
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>editUserDetails()}>Edit</Button>
            </FormControl>
       </Container>
    )
}

export default EditUser;
