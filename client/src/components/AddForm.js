import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWIthAuth'


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
    }

    return (
        <form onSubmit={onSubmit}>
            <input name='color' placeholder='color' onChange={handleChange} value={newColor.color}/>
            <input name='code' placeholder='code' onChange={handleChange} value={newColor.code}/>
            <button>Add Color</button>
        </form>
    )
}
