import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            <ul>
              <li>
                Monday............
                {MonOH}
                -
                {MonCH}
              </li>
              <li>
                Tuesday...........
                {TuesOH}
                -
                {TuesCH}
              </li>
              <li>
                Wednesday.........
                {WedOH}
                -
                {WedCH}
              </li>
              <li>
                Thursday..........
                {ThursOH}
                -
                {ThursCH}
              </li>
              <li>
                Friday............
                {FriOH}
                -
                {FriCH}
              </li>
              <li>
                Saturday............
                {SatOH}
                -
                {SatCH}
              </li>
              <li>
                Sunday............
                {SunOH}
                -
                {SunCH}
              </li>
            </ul>
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
