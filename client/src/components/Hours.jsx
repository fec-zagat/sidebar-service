import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/hours.css';

class Hours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoursToggle: true,
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
    const {
      openHours: {
        MonOH, TuesOH, WedOH, ThursOH, FriOH, SatOH, SunOH,
      },
      closeHours: {
        MonCH, TuesCH, WedCH, ThursCH, FriCH, SatCH, SunCH,
      },
    } = this.props;

    if (hoursToggle) {
      return (
        <div>
          <div className="openNow" role="row" tabIndex="0" onKeyPress={this.handleKeyPress} onClick={e => this.handleHoursToggle(e)}>
            <div className="d-flex justify-content-start">
              <div className="hoursLogo" />
              <div className="hoverRed d-flex justify-content-start">
                <h5>Open Now</h5>
                <div className="downLogo" />
              </div>

            </div>
          </div>

          <div>
            <div className="d-flex justify-content-between mb-2">
              <div className="days">Monday</div>
              <div className="spaceBetweenHours flex-fill align-self-center dots">&nbsp;</div>
              <div>
                {MonOH}
                -
                {MonCH}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="days">Tuesday</div>
              <div className="spaceBetweenHours flex-fill align-self-center dots">&nbsp;</div>
              <div>
                {TuesOH}
                -
                {TuesCH}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="days">Wednesday</div>
              <div className="spaceBetweenHours flex-fill align-self-center dots">&nbsp;</div>
              <div>
                {WedOH}
                -
                {WedCH}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="days">Thursday</div>
              <div className="spaceBetweenHours flex-fill align-self-center dots">&nbsp;</div>
              <div>
                {ThursOH}
                -
                {ThursCH}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="days">Friday</div>
              <div className="spaceBetweenHours flex-fill align-self-center dots">&nbsp;</div>
              <div>
                {FriOH}
                -
                {FriCH}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="days">Saturday</div>
              <div className="spaceBetweenHours flex-fill align-self-center dots">&nbsp;</div>
              <div>
                {SatOH}
                -
                {SatCH}
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="days">Sunday</div>
              <div className="spaceBetweenHours flex-fill align-self-center dots">&nbsp;</div>
              <div>
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
        <div className="hoverRed d-flex justify-content-start">
          <div className="hoursLogo" />
          <h5>Open Now</h5>
          <div className="upLogo" />
        </div>
      </div>
    );
  }
}

export default Hours;

Hours.propTypes = {
  openHours: PropTypes.object.isRequired,
  closeHours: PropTypes.object.isRequired,
};
