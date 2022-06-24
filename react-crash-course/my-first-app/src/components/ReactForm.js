import React, {useState} from 'react'

const ReactForm = (props) => {
	
	const [inputs, setInputs] = useState({});
	
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({...values, [name]: value}));
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
            	<input type="text" name="matriculationNumber" value={inputs.matriculationNumber || ""} onChange={handleChange}/>
            </label>
            <label>
                <input type="text" name="modeOfEntry" value={inputs.modeOfEntry || ""} onChange={handleChange}/>
            </label>
            <label>
                <input type="text" name="programOfStudy" value={inputs.programOfStudy || ""} onChange={handleChange}/>
            </label>
            <label>
                <input type="text" name"yearOfEntry" value={inputs.yearOfEntry || ""} onChange={handleChange}/>
            </label>
        </form>
    )
}

export default ReactForm;
