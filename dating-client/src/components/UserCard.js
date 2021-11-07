import './UserCard.css';

const UserCard = ({ user, clearUser }) => {
    return (
        <div className="UserCard">
            <h1 className="UserCard-title">{user.name}, {user.age}</h1>
            <h2 className="UserCard-subtitle">{user.gender}</h2>
            <div className="UserCard-info-label">City:</div>
            <div className="UserCard-info">{user.city}</div>
            <div className="UserCard-info-label">State / Province / Country:</div>
            <div className="UserCard-info">{user.state}</div>
            <div className="UserCard-info-label">Religion:</div>
            <div className="UserCard-info">{user.religion}</div>
            <div className="UserCard-info-label">Politics:</div>
            <div className="UserCard-info">{user.politics}</div>
            <div className="UserCard-info-label">Education:</div>
            <div className="UserCard-info">{user.education}</div>
            <div className="UserCard-info-label">Employment:</div>
            <div className="UserCard-info">{user.job}</div>
            <div className="UserCard-info-label">Kids wanted:</div>
            <div className="UserCard-info">{user.desiredChildren}</div>
            <div className="UserCard-info-label">Pets:</div>
            <div className="UserCard-info">{user.pets}</div>
            <div className="UserCard-info-label">Work or be a stay-at-home parent?</div>
            <div className="UserCard-info">{user.parenting}</div>
            <div className="UserCard-info-label">Favorite book(s):</div>
            <div className="UserCard-info">{user.books}</div>
            <div className="UserCard-info-label">Favorite movie(s):</div>
            <div className="UserCard-info">{user.movies}</div>
            <div className="UserCard-info-label">Name something you're proud of accomplishing in life:</div>
            <div className="UserCard-info">{user.proudOf}</div>
            <div className="UserCard-info-label">Interests / Hobbies:</div>
            <div className="UserCard-info">{user.hobbies}</div>
            <div className="UserCard-info-label">Something important you want a potential partner to know about you:</div>
            <div className="UserCard-info">{user.important}</div>
            <div className="UserCard-info-label">Preferred contact method:</div>
            <div className="UserCard-info">{user.preferredContact}</div>
            <div className="UserCard-info-label">Twitter handle:</div>
            <div className="UserCard-info">{user.twitter}</div>
            <div className="UserCard-info-label">Discord name:</div>
            <div className="UserCard-info">{user.discord}</div>
            <div className="UserCard-info-label">Email address:</div>
            <div className="UserCard-info">{user.email}</div>
            <button className="UserCard-button" type="button" onClick={clearUser}>Back to results</button>
        </div>
    )
}

export default UserCard;