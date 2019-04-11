import React, { Component } from 'react';
import Main from './Main';
import SideBar from './SideBar';
import FaceTimeModal from './Modal/FaceTimeModal';
import MapModal from './Modal/MapModal';
import '../styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faceTimeModal: false,
      mapModal: false,
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
    const path = window.location.pathname;
    const id = path.split('-')[2].split('/')[0];
    const endPoint = `http://localhost:3003/restaurants/${id}`;
    fetch(endPoint)
      .then(res => res.json())
      .then((response) => {
        this.setState({
          info: response,
        });
      })
      .catch(error => console.error('Error:', error));
  }

  openfaceTimeModal = () => {
    this.setState({
      faceTimeModal: true,
    });
  }

  closefaceTimeModal = () => {
    this.setState({
      faceTimeModal: false,
    });
  }

  openMapModal = () => {
    this.setState({
      mapModal: true,
    });
  }

  closeMapModal = () => {
    this.setState({
      mapModal: false,
    });
  }

  render() {
    const {
      info, faceTimeModal, mapModal, address,
    } = this.state;
    return (
      <React.Fragment>
        {mapModal ? <MapModal details={info}  close={this.closeMapModal} /> : null}
        <div>
          <FaceTimeModal
            className="faceTimeModal"
            show={faceTimeModal}
            close={this.closefaceTimeModal}
          >
            <div>
              <h6 className="mt-0 mb-0">&nbsp;</h6>
              <b>
              Open FaceTime?
              </b>
            </div>
            <h6 className="mt-0 mb-0">&nbsp;</h6>
            <div>
              <input type="checkbox" />
              &nbsp; Always open these types of links in the associated app
            </div>
          </FaceTimeModal>
        </div>
        <div className="pageContainer container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="shadow p-5 m-2">
                <Main details={info} />
              </div>
            </div>
            <div className="col-4">
              <div className="shadow p-5 m-2">
                <SideBar
                  details={info}
                  handleFaceTimeClick={() => this.openfaceTimeModal()}
                  handleMapClick={() => this.openMapModal()}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
