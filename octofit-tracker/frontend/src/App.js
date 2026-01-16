

import OctofitLogoSmall from './OctofitLogoSmall';

function App() {
  return (
    <div>
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary octofit-navbar">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <OctofitLogoSmall />
            <a className="navbar-brand ms-2" href="#">OctoFit Tracker</a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body text-center">
                <h1 className="display-4 mb-3">Welcome to <span className="text-primary">OctoFit Tracker</span></h1>
                <p className="lead mb-4">Track your fitness, join teams, compete on the leaderboard, and get personalized workout suggestions!</p>
                <a href="#" className="btn btn-primary btn-lg me-2">Get Started</a>
                <a href="#" className="btn btn-outline-primary btn-lg">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
