import { useState } from 'react';

function Form({ getMovieData }) {
    const initialState = { searchTerm: "" };

    const [formData, setFormData] = useState(initialState);
    
    const handleChange = (event) => {
        setFormData({ searchTerm: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.searchTerm === "") return; 
        // this prevents prevent the below code from running
        getMovieData(formData.searchTerm);
        setFormData(initialState);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Movie Title
                    <input
                        required 
                        type="text" 
                        value={formData.searchTerm} 
                        onChange={handleChange}
                        placeholder="Blade Runner 2049 ... etc" 
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;