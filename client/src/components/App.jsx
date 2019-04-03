import React, { Component } from 'react';
import $ from 'jquery';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3333/r',
      success: (results) => {
        const restaurantInfo = results.map((each) => {
          const restaurantObj = {
            name: each.name,
            header_description: each.header_description,
            body_description: each.body_description,
            cuisine: each.cuisine,
            price: each.price,
            zagat_review: {
              food: each.zagat_review.food,
              decor: each.zagat_review.decor,
              service: each.zagat_review.service,
            },
            address: {
              street: each.address.street,
              city: each.address.city,
              zipcode: each.address.zipcode,
              district: each.address.district,
              country: each.address.country,
              latitude: each.address.latitude,
              longtitude: each.address.longtitude,
            },
            phone_number: each.phone_number,
            official_website: each.official_website,
            open_hours: {
              Monday: each.open_hours.Monday,
              Tuesday: each.open_hours.Tuesday,
              Wednesday: each.open_hours.Wednesday,
              Thursday: each.open_hours.Thursday,
              Friday: each.open_hours.Friday,
              Saturday: each.open_hours.Saturday,
              Sunday: each.open_hours.Sunday,
            },
            close_hours: {
              Monday: each.close_hours.Monday,
              Tuesday: each.close_hours.Tuesday,
              Wednesday: each.close_hours.Wednesday,
              Thursday: each.close_hours.Thursday,
              Friday: each.close_hours.Friday,
              Saturday: each.close_hours.Saturday,
              Sunday: each.close_hours.Sunday,
            },
            known_for: {
              breakfast: each.known_for.breakfast,
              lunch: each.known_for.lunch,
              dinner: each.known_for.dinner,
              takeout: each.known_for.takeout,
              quickbites: each.known_for.quickbited,
              kids: each.known_for.kids,
              online_reservations: each.known_for.online_reservations,
              groups: each.known_for.groups,
              outdoor_seating: each.known_for.outdoor_seating,
            },
          };
          return restaurantObj;
        });
        this.setState({
          details: restaurantInfo,
        });
      },
    });
  }

  render() {
    const { details } = this.state;
    return (
      <Main details={details} />
    );
  }
}

export default App;
