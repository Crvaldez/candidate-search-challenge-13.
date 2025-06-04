import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <ul style={{ display: 'flex', listStyleType: 'none', gap: '1rem' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Candidate Search</Link>
        </li>
        <li>
          <Link to="/saved">Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
