import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/faceTimeModal.css';

class FaceTimeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { children, close, show } = this.props;
    let view = null;
    if (show === true) {
      view = (
        <div>
          <div
            className="modal-wrapper"
          >
            <div className="modal-body">
              <span>
                {children}
              </span>
            </div>
            <div className="btn-FaceTime">
              <button type="button" className="close-btn" onClick={close}>Cancel</button>
              <button type="button" className="close-btn" onClick={close}>Open FaceTime</button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>{view}</div>
    );
  }
}

export default FaceTimeModal;

FaceTimeModal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
};
