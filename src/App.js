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
      email2: '',
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

    this.validate = this.validate.bind(this);
  
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.email2Change = this.email2Change.bind(this);
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
    this.moreInfoChange = this.moreInfoChange.bind(this);

    this.allChange = this.allChange.bind(this);
  }

  validate = (allState) => {
    return {
      name: /^[a-zA-Z ]+$/.test(allState.name)
      ? ''
      : 'Invalid name',
      email: /^[\w\.-]+@\w+\.\w{2,3}$/.test(allState.email)
      ? ''
      : 'Invalid email',
      email2: allState.email == allState.email2
      ? ''
      : 'Email not matching',
      phone: /^([\d+ -])+$/.test(allState.phone)
      ? ''
      : 'Invalid phone',
      address: /\S+/.test(allState.address)
      ? ''
      : 'Invalid address',
      city: /\S+/.test(allState.city)
      ? ''
      : 'Invalid city',
      state: /\S+/.test(allState.state)
      ? ''
      : 'Invalid state',
      country: /\S+/.test(allState.country)
      ? ''
      : 'Invalid country',
      zip: /\S+/.test(allState.zip)
      ? ''
      : 'Invalid zip',
      hearAboutUs: /\S+/.test(allState.hearAboutUs)
      ? ''
      : 'Invalid hearAboutUs',
      dicipline1: /\S+/.test(allState.dicipline1)
      ? ''
      : 'Invalid dicipline1',
      // dicipline2: /\S+/.test(allState.dicipline2)
      // ? ''
      // : 'Invalid dicipline2',
      // location: /\S+/.test(allState.location)
      // ? ''
      // : 'Invalid location',
      portfolio: /\S+/.test(allState.portfolio)
      ? ''
      : 'Invalid portfolio',
      moreInfo: /\S+/.test(allState.moreInfo)
      ? ''
      : 'Invalid moreInfo'
    }
  }

  nameChange (newName) {this.setState({name: newName})}
  emailChange (newEmail) {this.setState({email: newEmail})}
  email2Change (newEmail) {this.setState({email2: newEmail})}
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
  moreInfoChange (newMoreInfo) {this.setState({moreInfo: newMoreInfo})}

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
                email2Change = {this.email2Change}
                phoneChange = {this.phoneChange}
                addressChange = {this.addressChange}
                cityChange = {this.cityChange}
                stateChange = {this.stateChange}
                countryChange = {this.countryChange}
                zipChange = {this.zipChange}
                hearAboutUsChange = {this.hearAboutUsChange}
                validate={this.validate}
              />} />
              <Route exact strict path ="/skills-and-location" render={() => <Sec2SkillsLocation 
                state={this.state}
                dicipline1Change={this.dicipline1Change}
                dicipline2Change={this.dicipline2Change}
                locationChange={this.locationChange}
                validate={this.validate}/>}
              />
              <Route exact strict path ="/portfolio" render={()=><Sec3Portfolio
                  state={this.state}
                  portfolioChange={this.portfolioChange}
                  moreInfoChange={this.moreInfoChange}
                  validate={this.validate}/>}
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