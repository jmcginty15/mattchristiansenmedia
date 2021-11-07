import './User.css';

const User = ({ user, setUser }) => {
    return (
        <div className="User">
            <span>{user.name} | {user.age} | {user.city} | {user.state}</span>
            <button className="User-button" type="button" onClick={() => setUser(user)}>View</button>
        </div>
    )
}

export default User;