import { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ submit, searching }) => {
    const [formData, setFormData] = useState({
        name: '',
        location: ''
    });

    const handleChange = (evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        submit(formData);
    }

    const clearSearch = () => setFormData({
        name: '',
        location: ''
    });

    return (
        <form className="SearchForm" onSubmit={handleSubmit}>
            <h3 className="SearchForm-title">Search for people</h3>
            <label className="SearchForm-label" htmlFor="name">Name</label>
            <input className="SearchForm-input" type="text" name="name" onChange={handleChange} value={formData.name} />
            <label className="SearchForm-label" htmlFor="location">Location</label>
            <input className="SearchForm-input" type="text" name="location" onChange={handleChange} value={formData.location} />
            <small className="SearchForm-note"><em>Note: Locations are saved in the spreadsheet in different ways, so be sure to try city and state/province/country names as well as postal codes (e.g. "MT") and area codes (e.g. "785") of the place you're looking for.</em></small>
            <div className="SearchForm-buttons">
                {searching ? <h3 className="SearchForm-searching-label">Searching...</h3> : <button className="SearchForm-button SearchForm-button-left" type="submit">Search</button>}
                <button className="SearchForm-button SearchForm-button-right" type="button" onClick={clearSearch}>Clear search</button>
            </div>
        </form>
    )
}

export default SearchForm;