import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWIthAuth'
import styled from 'styled-components'

const Form = styled.form`
    width: 80%;
    margin: 4% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
`;

const Button = styled.button`
    width: 35%;
    margin-top: 4%;
    padding: 2%;
    border: none;
    background: #6ACFF7;

`;


export default function AddForm({updateColors}) {

    const [newColor, setNewColor] = useState({
        color: '',
        code: '',
    })

    const handleChange = e => {
        setNewColor({
            ...newColor,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        const color = {
            color: newColor.color,
            code: {
                hex: newColor.code
            },
            id: ''
        }
        console.log(newColor);
        axiosWithAuth().post('/api/colors', color)
            .then(res=>{
                axiosWithAuth().get('/api/colors')
                    .then(res=>updateColors(res.data))
                    .catch(err=>console.log(err))
            })
            .catch(err=>console.log(err))

        setNewColor({
            color: '',
            code: '',
        })
    }

    return (
        <Form onSubmit={onSubmit}>
            <h5>New Color</h5>
            <Input name='color' placeholder='color' onChange={handleChange} value={newColor.color}/>
            <Input name='code' placeholder='code' onChange={handleChange} value={newColor.code}/>
            <Button>Add Color</Button>
        </Form>
    )
}
