import React, { Component } from 'react';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {},
    };
  }

  componentDidMount() {
    fetch('http://localhost:3333/r')
      .then(res => res.json())
      .then((response) => {
        const {
          name, headerDescription, bodyDescription, cuisine, price, phoneNumber, officialWebsite,
        } = response;
        const { food, decor, service } = response.zagatReview;
        const {
          street, city, zipcode, district, country, latitude, longtitude,
        } = response.address;
        const {
          MonOH, TuesOH, WedOH, ThursOH, FriOH, SatOH, SunOH,
        } = response.openHours;
        const {
          MonCH, TuesCH, WedCH, ThursCH, FriCH, SatCH, SunCH,
        } = response.closeHours;
        const {
          breakfast, lunch, dinner, takeout, quickbited, kids, onlineReservations, groups,
          outdoorSeating,
        } = response.knownFor;

        this.setState({
          details: {
            name,
            headerDescription,
            bodyDescription,
            cuisine,
            price,
            zagatReview: {
              food,
              decor,
              service,
            },
            address: {
              street,
              city,
              zipcode,
              district,
              country,
              latitude,
              longtitude,
            },
            phoneNumber,
            officialWebsite,
            openHours: {
              MonOH,
              TuesOH,
              WedOH,
              ThursOH,
              FriOH,
              SatOH,
              SunOH,
            },
            closeHours: {
              MonCH,
              TuesCH,
              WedCH,
              ThursCH,
              FriCH,
              SatCH,
              SunCH,
            },
            knownFor: {
              breakfast,
              lunch,
              dinner,
              takeout,
              quickbited,
              kids,
              onlineReservations,
              groups,
              outdoorSeating,
            },
          },
        });
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    const { details } = this.state;
    return (
      <Main details={details} />
    );
  }
}

export default App;
