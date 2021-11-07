import { useNavigate } from 'react-router';
import './Landing.css';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="Landing">
            <div className="Landing-inner">
                <h1 className="Landing-title">Based Meetups with Matt & Blonde</h1>
                <h2 className="Landing-subtitle">We love you, you're very special...</h2>
                <button className="Landing-button" type="button" onClick={() => navigate('/people')}>Find some based people</button>
                <h3 className="Landing-subtitle-bottom">If you haven't already,</h3>
                <h3 className="Landing-subtitle-link">
                    <a className="Landing-link" href="https://docs.google.com/forms/d/1SJTtj8PpCqF_NUqJrrPtmtUhK5ObxwtodjZZ4kDD7RI/viewform?edit_requested=true" target="_blank">enter your information for others to see.</a>
                </h3>
                <h3 className="Landing-subtitle">Or if you feel so inclined,</h3>
                <button className="Landing-button" type="button" onClick={() => navigate('/dev')}>Show the dev some love</button>
            </div>
        </div>
    )
}

export default Landing;