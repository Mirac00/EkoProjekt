import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from '../common/Events';



function activeEvents() {
  return (
    <React.Fragment>
    <div className="container mt-3">
      <div className="gird">
        <div className="row">
          <div className="col">
            <Events/>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default activeEvents;
