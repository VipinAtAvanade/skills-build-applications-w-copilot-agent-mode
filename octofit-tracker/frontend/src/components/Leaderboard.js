import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = `https://${codespace}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched leaderboard from:', endpoint);
        console.log('Fetched leaderboard data:', data);
        setLeaders(data.results ? data.results : data);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, [endpoint]);

  return (
    <div className="mt-4">
      <div className="card shadow">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="mb-0 display-6">Leaderboard</h2>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
              <i className="bi bi-arrow-clockwise me-1"></i>Refresh
            </button>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">User</th>
                  <th scope="col">Points</th>
                </tr>
              </thead>
              <tbody>
                {leaders.map((entry, idx) => (
                  <tr key={entry.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{entry.user}</td>
                    <td>{entry.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
