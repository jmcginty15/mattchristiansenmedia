import { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ submit, searching }) => {
    const [formData, setFormData] = useState({
        name: '',
        minAge: '',
        maxAge: '',
        gender: '',
        city: '',
        state: '',
        religion: '',
        politics: ''
    });

    const handleChange = (evt) => {
        const value = evt.target.name === 'minAge' || evt.target.name === 'maxAge' ? parseInt(evt.target.value) : evt.target.value;
        setFormData({ ...formData, [evt.target.name]: value });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        submit(formData);
    }

    const clearSearch = () => setFormData({
        name: '',
        minAge: '',
        maxAge: '',
        gender: '',
        city: '',
        state: '',
        religion: '',
        politics: ''
    });

    return (
        <form className="SearchForm" onSubmit={handleSubmit}>
            <h3 className="SearchForm-title">Search for people</h3>
            <label className="SearchForm-label" htmlFor="name">Name</label>
            <input className="SearchForm-input" type="text" name="name" onChange={handleChange} value={formData.name} />
            <label className="SearchForm-label" htmlFor="age">Age</label>
            <div className="SearchForm-age-input" name="age">
                <span className="SearchForm-age-input-left">
                    <label htmlFor="minAge">Min</label>&nbsp;
                    <input className="SearchForm-input SearchForm-input-number" type="number" name="minAge" min="18" onChange={handleChange} value={formData.minAge} />
                </span>
                <span className="SearchForm-age-input-right">
                    <label htmlFor="maxAge">Max</label>&nbsp;
                    <input className="SearchForm-input SearchForm-input-number" type="number" name="maxAge" min="19" onChange={handleChange} value={formData.maxAge} />
                </span>
            </div>
            <label className="SearchForm-label" htmlFor="gender">Gender</label>
            <select className="SearchForm-input" name="gender" onChange={handleChange} value={formData.gender}>
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <label className="SearchForm-label" htmlFor="city">City</label>
            <input className="SearchForm-input" type="text" name="city" onChange={handleChange} value={formData.city} />
            <label className="SearchForm-label" htmlFor="state">State / Province / Country</label>
            <input className="SearchForm-input" type="text" name="state" onChange={handleChange} value={formData.state} />
            <small className="SearchForm-note"><em>Note: Cities and states are saved in the spreadsheet in different ways, so be sure to try both the name (e.g. "Montana") and postal code (e.g. "MT") of the place you're looking for.</em></small>
            <label className="SearchForm-label" htmlFor="religion">Religion</label>
            <input className="SearchForm-input" type="text" name="religion" onChange={handleChange} value={formData.religion} />
            <label className="SearchForm-label" htmlFor="politics">Politics</label>
            <input className="SearchForm-input" type="text" name="politics" onChange={handleChange} value={formData.politics} />
            <div className="SearchForm-buttons">
                {searching ? <h3 className="SearchForm-searching-label">Searching...</h3> : <button className="SearchForm-button SearchForm-button-left" type="submit">Search</button>}
                <button className="SearchForm-button SearchForm-button-right" type="button" onClick={clearSearch}>Clear search</button>
            </div>
        </form>
    )
}

export default SearchForm;