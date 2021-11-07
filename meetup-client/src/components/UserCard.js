import './UserCard.css';

const UserCard = ({ user, clearUser }) => {
    return (
        <div className="UserCard">
            <h1 className="UserCard-title">{user.name}</h1>
            <div className="UserCard-info-label">Location:</div>
            <div className="UserCard-info">{user.location}</div>
            <div className="UserCard-info-label">Phone:</div>
            <div className="UserCard-info">{user.phone}</div>
            <div className="UserCard-info-label">Email:</div>
            <div className="UserCard-info">{user.email}</div>
            <div className="UserCard-info-label">Twitter or other form of contact:</div>
            <div className="UserCard-info">{user.twitter}</div>
            <button className="UserCard-button" type="button" onClick={clearUser}>Back to results</button>
        </div>
    )
}

export default UserCard;