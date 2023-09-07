import React, {useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addPost, removePost, updatePost } from '../actions';
import '../assets/styles/components/forms.components.css';


const FormsComponent = () => {
    // const [isVisible, setIsVisible] = useState(false);

    const initialState = {
        id: '', 
        name: ''
    }    
    
    const [formData, setFormData] = useState(initialState)

    const [data, setData] = useState([])

    const hangleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // const handleVisible = () => {
    //     setIsVisible(!isVisible)
    // }
    const handleAdded = (e) => {
        e.preventDefault();
        
        console.log('formData', formData);

        setData([...data, formData])
        
        addPost(localStorage.setItem("data", JSON.stringify(data)));
    }
    const handleEdit = (id, name, e) => {
        e.preventDefault();
        console.log('edit');
        updatePost(id, name);
    }
    const handleRemove = (id, name) => {
        console.log('remove')
        removePost(localStorage.setItem(id, name ))
    }

    return (
        <div>
            <button className='add_btn' onClick={handleAdded}>+</button>
            <div style={{margin: '24px 0'}}>
                <form >
                    <input type='text' placeholder='Id'  value={formData.id} name="id" onChange={hangleChange}  />
                    <input type='text' placeholder='Title' value={formData.name} name="name"onChange={hangleChange}  />
                </form>
            </div>
            {data.map(item => 
                <div key={item.id}>
                    <p>{item.id} {item.name}</p>
                    <button onClick={handleAdded}>Add</button>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleRemove}>Delete</button>
                </div>
            )}
        </div>
        
    );
};


const mapDispatchToProps = dispatch => {
    return {
      addPost: (title, content) => {
        dispatch(addPost(title, content));
      }
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(FormsComponent);
