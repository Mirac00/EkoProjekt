import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from '../common/Posts';


function Home() {
  return (
    <React.Fragment>
    <div className="container mt-3">
      <div className="gird">
        <div className="row">
          <div className="col">
            <Posts/>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Home;
