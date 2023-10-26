import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) =>{
    try {
     return await axios.post(`${URL}/add`,data);
    } catch (error) {
        console.log('Error While calling Add User API',error);

    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`); 

    } catch (error) {
        console.log('Error while calling getUsers API',error);
    }
}

export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('error while calling getUSer api')
    }
}

export const editUser = async(user,id) => {
    try {
        return await axios.post(`${URL}/${id}`, user)   
    } catch (error) {
        console.log('error while calling editUSer api', error);
    }
}

export const deleteUser = async(id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log('eror while calling deteUSer api', error);
    }
}