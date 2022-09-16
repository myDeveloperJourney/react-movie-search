import { useState } from 'react';

function Form({ getMovieData }) {
    const [formData, setFormData] = useState({ searchTerm: "" });
    
    const handleChange = (event) => {
        setFormData({ searchTerm: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getMovieData(formData.searchTerm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={formData.searchTerm} 
                    onChange={handleChange} 
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;