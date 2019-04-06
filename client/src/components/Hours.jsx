import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/hours.css';

class Hours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoursToggle: false,
    };
  }

  handleHoursToggle(e) {
    e.preventDefault();
    const { hoursToggle } = this.state;
    this.setState({
      hoursToggle: !hoursToggle,
    });
  }

  render() {
    const { hoursToggle } = this.state;
    const { openHours, closeHours } = this.props;
    const {
      MonOH, TuesOH, WedOH, ThursOH, FriOH, SatOH, SunOH,
    } = openHours;
    const {
      MonCH, TuesCH, WedCH, ThursCH, FriCH, SatCH, SunCH,
    } = closeHours;

    if (hoursToggle === true) {
      return (
        <div>
          <div role="row" tabIndex="0" onKeyPress={this.handleKeyPress} onClick={e => this.handleHoursToggle(e)}>
            <h1>Open Now</h1>
          </div>
          <div>
            <div className="d-flex justify-content-between mb-2">
              <div className="">Monday</div>
              <div className="spaceBetweenHours flex-fill align-self-center">&nbsp;</div>
              <div className="">
                {MonOH}
                -
                {MonCH}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="">Tuesday</div>
              <div className="spaceBetweenHours flex-fill align-self-center">&nbsp;</div>
              <div className="">
                {TuesOH}
                -
                {TuesCH}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="">Wednesday</div>
              <div className="spaceBetweenHours flex-fill align-self-center">&nbsp;</div>
              <div className="">
                {WedOH}
                -
                {WedCH}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="">Thursday</div>
              <div className="spaceBetweenHours flex-fill align-self-center">&nbsp;</div>
              <div className="">
                {ThursOH}
                -
                {ThursCH}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="">Friday</div>
              <div className="spaceBetweenHours flex-fill align-self-center">&nbsp;</div>
              <div className="">
                {FriOH}
                -
                {FriCH}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="">Saturday</div>
              <div className="spaceBetweenHours flex-fill align-self-center">&nbsp;</div>
              <div className="">
                {SatOH}
                -
                {SatCH}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="">Sunday</div>
              <div className="spaceBetweenHours flex-fill align-self-center">&nbsp;</div>
              <div className="">
                {SunOH}
                -
                {SunCH}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div role="row" tabIndex="0" onKeyPress={this.handleKeyPress} onClick={e => this.handleHoursToggle(e)}>
        <h1>Open Now</h1>
      </div>
    );
  }
}

export default Hours;

Hours.propTypes = {
  openHours: PropTypes.object.isRequired,
  closeHours: PropTypes.object.isRequired,
};
