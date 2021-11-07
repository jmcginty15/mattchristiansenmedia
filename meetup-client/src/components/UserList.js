import { useState, useEffect } from 'react';
import { paginate } from '../utils';
import User from './User';
import UserCard from './UserCard';
import './UserList.css';

const UserList = ({ users }) => {
    const paginatedUsers = paginate(users);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentUser, setCurrentUser] = useState(null);

    const setPage = (page) => {
        if (page < 0) page = 0;
        else if (page > paginatedUsers.length - 1) page = paginatedUsers.length - 1;
        setCurrentPage(page);
    }

    useEffect(() => {
        setCurrentPage(0);
        setCurrentUser(null);
    }, [users]);

    return (
        <div className="UserList">
            {currentUser ? <UserCard user={currentUser} clearUser={() => setCurrentUser(null)} /> : <div>
                {users.length ? <div>
                    <h1>Matches</h1>
                    <div className="UserList-header">
                        <span id="UserList-first-page-header" title="First page" onClick={() => setPage(0)}>{'<<'}</span>
                        <span id="UserList-prev-page-header" title="Previous page" onClick={() => setPage(currentPage - 1)}>{'<'}</span>
                        <span id="UserList-page-nums-header">
                            {currentPage >= 2 && <span id="UserList-page-num--2-header" className="UserList-page-num" title={`Page ${currentPage - 1}`} onClick={() => setCurrentPage(currentPage - 2)}>{currentPage - 1}</span>}
                            {currentPage >= 1 && <span id="UserList-page-num--1-header" className="UserList-page-num" title={`Page ${currentPage}`} onClick={() => setCurrentPage(currentPage - 1)}>{currentPage}</span>}
                            <span id="UserList-page-num-current-header" className="UserList-page-num" title={`Page ${currentPage + 1}`}>{currentPage + 1}</span>
                            {currentPage < paginatedUsers.length - 1 && <span id="UserList-page-num-+1-header" className="UserList-page-num" title={`Page ${currentPage + 2}`} onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 2}</span>}
                            {currentPage < paginatedUsers.length - 2 && <span id="UserList-page-num-+2-header" className="UserList-page-num" title={`Page ${currentPage + 3}`} onClick={() => setCurrentPage(currentPage + 2)}>{currentPage + 3}</span>}
                        </span>
                        <span id="UserList-next-page-header" title="Next page" onClick={() => setPage(currentPage + 1)}>{'>'}</span>
                        <span id="UserList-last-page-header" title="Last page" onClick={() => setPage(paginatedUsers.length - 1)}>{'>>'}</span>
                    </div>
                    <div className="UserList-content">
                        {paginatedUsers[currentPage].map((user) => <User key={user.timestamp} user={user} setUser={setCurrentUser} />)}
                    </div>
                    <div className="UserList-footer">
                        <span id="UserList-first-page-footer" title="First page" onClick={() => setPage(0)}>{'<<'}</span>
                        <span id="UserList-prev-page-footer" title="Previous page" onClick={() => setPage(currentPage - 1)}>{'<'}</span>
                        <span id="UserList-page-nums-footer">
                            {currentPage >= 2 && <span id="UserList-page-num--2-footer" className="UserList-page-num" title={`Page ${currentPage - 1}`} onClick={() => setCurrentPage(currentPage - 2)}>{currentPage - 1}</span>}
                            {currentPage >= 1 && <span id="UserList-page-num--1-footer" className="UserList-page-num" title={`Page ${currentPage}`} onClick={() => setCurrentPage(currentPage - 1)}>{currentPage}</span>}
                            <span id="UserList-page-num-current-footer" className="UserList-page-num" title={`Page ${currentPage + 1}`}>{currentPage + 1}</span>
                            {currentPage < paginatedUsers.length - 1 && <span id="UserList-page-num-+1-footer" className="UserList-page-num" title={`Page ${currentPage + 2}`} onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 2}</span>}
                            {currentPage < paginatedUsers.length - 2 && <span id="UserList-page-num-+2-footer" className="UserList-page-num" title={`Page ${currentPage + 3}`} onClick={() => setCurrentPage(currentPage + 2)}>{currentPage + 3}</span>}
                        </span>
                        <span id="UserList-next-page-footer" title="Next page" onClick={() => setPage(currentPage + 1)}>{'>'}</span>
                        <span id="UserList-last-page-footer" title="Last page" onClick={() => setPage(paginatedUsers.length - 1)}>{'>>'}</span>
                    </div>
                </div> : <div>
                    <h1>No matches found!</h1>
                    <h2>Sad face</h2>
                    <h2>Try another search</h2>
                </div>}
            </div>}
        </div>
    )
}

export default UserList;