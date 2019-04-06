import React, { Component } from 'react';
import Main from './Main';
import SideBar from './SideBar';

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <div className="shadow p-5 m-2">
              <Main details={info} />
            </div>
          </div>
          <div className="col-4">
            <div className="shadow p-5 m-2">
              <SideBar details={info} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
