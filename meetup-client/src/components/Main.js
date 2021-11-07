import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import SearchForm from './SearchForm';
import UserList from './UserList';
import { BASE_URL } from '../config';
import './Main.css';

const Main = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [searchData, setSearchData] = useState({
        searching: true,
        data: {}
    });

    const handleSubmit = (formData) => {
        const data = { ...formData };
        for (let key of Object.keys(data)) if (data[key] === '') delete data[key];
        setSearchData({
            searching: true,
            data: data
        });
    }

    useEffect(() => {
        if (searchData.searching) {
            let queryString = '';
            for (let key of Object.keys(searchData.data)) {
                if (queryString.length) queryString += '&';
                else queryString = '?';
                queryString += `${key}=${searchData.data[key]}`
            }

            axios.get(`${BASE_URL}/meetups${queryString}`).then((res) => {
                setUsers(res.data.users);
                setSearchData({
                    searching: false,
                    data: null
                });
            });
        }
    }, [searchData]);

    return (
        <div className="Main">
            <h1 className="Main-title">A based meetup group awaits...</h1>
            <h2 className="Main-subtitle">Defensively, Susan.</h2>
            <div className="Main-content">
                <SearchForm submit={handleSubmit} searching={searchData.searching} />
                <UserList users={users} />
            </div>
            <div className="Main-buttons">
                <button id="Main-button-back" type="button" onClick={() => navigate('/')}>Back to home</button>
                <button id="Main-button-dev" type="button" onClick={() => navigate('/dev')}>About the dev</button>
            </div>
        </div>
    )
}

export default Main;