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
import Validation from './Validation';
import nav from './nav';
import * as state from './state';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = state.state;
    //add proptype

    this.universalChange = this.universalChange.bind(this);
    this.isTouchedChange = this.isTouchedChange.bind(this);
    this.allChange = this.allChange.bind(this);
  }

  universalChange = (key, value) => this.setState({[key] : value})
  isTouchedChange (field) {this.setState(prevState => ({
    isTouched: {
      ...prevState.isTouched,
      [field]: true
    }
  }))}

  allChange(newState) {
    this.setState(newState);
  }

  render() {
    console.log(this.state.name)
    console.log(nav);

    return (
      <div className="App">
        <Router basename={`${process.env.PUBLIC_URL}/`}>
          <div className="bracket">
            <SecHeader />
            <Switch>
              <Route exact strict path ={nav.home} render={() => <SecHome state={this.state} allChange={this.allChange}/>} />
              <Route exact strict path ={nav.personalInfo} render={()=><Sec1PersonalInfo 
                state = {this.state}
                universalChange = {this.universalChange}
                isTouchedChange = {this.isTouchedChange}
                validate={Validation}
              />} />
              <Route exact strict path ={nav.skillsLocation} render={() => <Sec2SkillsLocation 
                state={this.state}
                universalChange = {this.universalChange}
                isTouchedChange = {this.isTouchedChange}
                validate={Validation}/>}
              />
              <Route exact strict path ={nav.portfolio} render={()=><Sec3Portfolio
                state={this.state}
                universalChange = {this.universalChange}
                isTouchedChange = {this.isTouchedChange}
                validate={Validation}/>}
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