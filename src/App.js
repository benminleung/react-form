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
      address: '',
      city: '',
      state: '',
      country: '',
      zip: '',
      hearAboutUs: '',
      dicipline1: '',
      dicipline2: {
        visual: false,
        ux: false,
        frontEnd: false,
        none: false
      },
      location: {
        austin: false,
        newYork: false,
        toronto: false,
        shanghai: false,
        dublin: false,
        hursley: false,
        boeblingen: false,
        somewhere: false
      },
      portfolio: '',
      moreInfo: ''
    }
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.addressChange = this.addressChange.bind(this);
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

    this.allChange = this.allChange.bind(this);
  }

  nameChange (newName) {this.setState({name: newName})}
  emailChange (newEmail) {this.setState({email: newEmail})}
  phoneChange (newPhone) {this.setState({phone: newPhone})}
  addressChange (newAddress) {this.setState({name: newAddress})}
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

  allChange(newState) {
    this.setState(newState);
  }

  render() {
    console.log(this.state.name)
    return (
      <div className="App">
        <Router>
          <div className="bracket">
            <SecHeader />
            <Switch>
              <Route exact strict path ="/" render={() => <SecHome state={this.state} allChange={this.allChange}/>} />
              <Route exact strict path ="/personal-information" render={()=><Sec1PersonalInfo 
                state = {this.state}
                nameChange = {this.nameChange}
                emailChange = {this.emailChange}
                phoneChange = {this.phoneChange}
                addressChange = {this.addressChange}
                cityChange = {this.cityChange}
                stateChange = {this.stateChange}
                countryChange = {this.countryChange}
                zipChange = {this.zipChange}
                hearAboutUsChange = {this.hearAboutUsChange}
              />} />
              <Route exact strict path ="/skills-and-location" render={() => <Sec2SkillsLocation 
                state={this.state}
                dicipline1Change={this.dicipline1Change}
                dicipline2Change={this.dicipline2Change}
                locationChange={this.locationChange}/>}
              />
              <Route exact strict path ="/portfolio" render={()=><Sec3Portfolio
                  state={this.state}
                  portfolioChange={this.portfolioChange}
                  moreInfo={this.moreInfo}/>}
              />

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