import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt,
  Switch} from 'react-router-dom';
import SecHeader from './SecHeader';
import Sec1PersonalInfo from './Sec1PersonalInfo';
import Sec2SkillsLocation from './Sec2SkillsLocation';
import Sec3Portfolio from './Sec3Portfolio';
import SecFooter from './SecFooter';
import SecHome from './SecHome';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      adress: '',
      city: '',
      state: '',
      country: '',
      zip: '',
      hearAboutUs: '',
      dicipline1: '',
      dicipline2: '',
      location: '',
      portfolio: '',
      moreInfo: ''
    }
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.adressChange = this.adressChange.bind(this);
    this.cityChange = this.cityChange.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.countryChange = this.countryChange.bind(this);
    this.zipChange = this.zipChange.bind(this);
    this.hearAboutUsChange = this.hearAboutUsChange.bind(this);
    this.dicipline1Change = this.dicipline1Change.bind(this);
    this.dicipline2Change = this.dicipline2Change.bind(this);
    this.locationChange = this.locationChange.bind(this);
    this.portfolioChange = this.portfolioChange.bind(this);
    this.moreInfo = this.moreInfo.bind(this);
  }

  nameChange (newName) {this.setState({name: newName})}
  emailChange (newEmail) {this.setState({email: newEmail})}
  phoneChange (newPhone) {this.setState({phone: newPhone})}
  adressChange (newAdress) {this.setState({name: newAdress})}
  cityChange (newCity) {this.setState({name: newCity})}
  stateChange (newState) {this.setState({state: newState})}
  countryChange (newCountry) {this.setState({country: newCountry})}
  zipChange (newZip) {this.setState({state: newZip})}
  hearAboutUsChange (newHearAboutUs) {this.setState({hearAboutUs: newHearAboutUs})}
  dicipline1Change (newDicipline1) {this.setState({dicipline1: newDicipline1})}
  dicipline2Change (newDicipline2) {this.setState({dicipline2: newDicipline2})}
  locationChange (newLocation) {this.setState({location: newLocation})}
  portfolioChange (newPortfolio) {this.setState({portfolio: newPortfolio})}
  moreInfo (newMoreInfo) {this.setState({moreInfo: newMoreInfo})}

  render() {
    return (
      <div className="App">
        <Router>
          <div className="bracket">
            <SecHeader />
            <Switch>
              <Route exact strict path ="/" component={SecHome} />
              <Route exact strict path ="/personal-information" component={Sec1PersonalInfo} />
              <Route exact strict path ="/skills-and-location" component={Sec2SkillsLocation} />
              <Route exact strict path ="/portfolio" component={Sec3Portfolio} />

              {/* renders error 404 page when path not found */}
              <Route render={() => <div>Error 404 - Page not found</div>} />
            </Switch>
            <SecFooter />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;