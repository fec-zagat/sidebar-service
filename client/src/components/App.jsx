import React, { Component } from 'react';
import Main from './Main';
import SideBar from './SideBar';
import Map from './Map';
import FaceTime from './FaceTime';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: '',
        headerDescription: '',
        bodyDescription: '',
        cuisine: '',
        price: '',
        zagatReview: {
          food: '',
          decor: '',
          service: '',
        },
        address: {
          street: '',
          city: '',
          zipcode: '',
          district: '',
          country: '',
          latitude: '',
          longtitude: '',
        },
        phoneNumber: '',
        officialWebsite: '',
        openHours: {
          MonOH: '',
          TuesOH: '',
          WedOH: '',
          ThursOH: '',
          FriOH: '',
          SatOH: '',
          SunOH: '',
        },
        closeHours: {
          MonCH: '',
          TuesCH: '',
          WedCH: '',
          ThursCH: '',
          FriCH: '',
          SatCH: '',
          SunCH: '',
        },
        knownFor: {
          breakfast: '',
          lunch: '',
          dinner: '',
          takeout: '',
          quickbited: '',
          kids: '',
          onlineReservations: '',
          groups: '',
          outdoorSeating: '',
        },
      },
    };
  }

  componentDidMount() {
    fetch('http://localhost:3333/r')
      .then(res => res.json())
      .then((response) => {
        this.setState({
          info: response,
        });
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    const { info } = this.state;
    return (
      <div>
        <div>
          <Main details={info} />
        </div>
        <div>
          <SideBar details={info} />
        </div>
        <div>
          <FaceTime />
        </div>
        <div>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
