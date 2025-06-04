import { useState, useEffect } from 'react';
import { searchGithubUser, removeCandidate } from '../api/API';

interface Candidate {
  id: number;
  username: string;
}

const SavedCandidates = () => {
  // Simulated saved candidates list
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([
    { id: 1, username: 'octocat' },
    { id: 2, username: 'torvalds' },
  ]);

  const [userDataList, setUserDataList] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const data = await Promise.all(
        savedCandidates.map(async (candidate) => {
          const data = await searchGithubUser(candidate.username);
          return { ...data, id: candidate.id };
        })
      );
      setUserDataList(data);
    };

    fetchAllUsers();
  }, [savedCandidates]);

  const handleRemove = (id: number) => {
    removeCandidate(id); // Optional API call
    setUserDataList((prev) => prev.filter((user) => user.id !== id));
    setSavedCandidates((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      <ul>
        {userDataList.length === 0 ? (
          <p>Loading...</p>
        ) : (
          userDataList.map((user) => (
            <li key={user.id}>
              {user.login} – <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
              <button onClick={() => handleRemove(user.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default SavedCandidates;
