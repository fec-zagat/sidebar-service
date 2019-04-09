import React from 'react';

const FaceTime = () => (
  <div>
    <div className="modal fade faceTimeModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-title mt-3 ml-4">
            <span>
              Open FaceTime?
            </span>
            <div className="modal-body">
              <span>
                <input type="checkbox" />
                &nbsp; Always open these types of links in the associated app
              </span>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-default">Open FaceTime</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default FaceTime;
