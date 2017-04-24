import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Tesco Store Auditor</h1>
        <p>The Store Manage application to Audit the activities of managers at Tesco Stores..</p>
        <Link to="tasks" className="btn btn-primary btn-lg">Start Updating your work progress</Link>
      </div>
    );
  }
}

export default HomePage;
