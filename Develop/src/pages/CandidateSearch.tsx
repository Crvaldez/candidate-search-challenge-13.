import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [randomUsers, setRandomUsers] = useState([]);

  // Fetch random GitHub users on initial load
  useEffect(() => {
    const fetchRandomUsers = async () => {
      const data = await searchGithub();
      setRandomUsers(data);
    };
    fetchRandomUsers();
  }, []);

  const handleSearch = async () => {
    const data = await searchGithubUser(searchTerm);
    setUserData(data);
  };

  return (
    <>
      <h1>Candidate Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for candidates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {userData && (
        <div className="user-card">
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt="avatar" width={100} />
          <p>Followers: {userData.followers}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}

      <h2>Random GitHub Users</h2>
      <div className="user-list">
        {randomUsers.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.login}</h3>
            <img src={user.avatar_url} alt="avatar" width={80} />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default CandidateSearch;
