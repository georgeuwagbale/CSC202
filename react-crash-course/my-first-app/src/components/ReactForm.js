import React, {useState} from 'react'

const ReactForm = (props) => {
	
	const [inputs, setInputs] = setState({});
	
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({...values, [name]: value});
	}	
	
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submit`);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Department: 
            	<input type="text" name="department" value={inputs.department || ""} onChange={handleChange}/>
            </label>
            <label>
            	<input type
            </label>
        </form>
    )
}

