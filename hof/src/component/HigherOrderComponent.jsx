import React, { Component } from 'react';

class HigherOrderComponent extends Component {
  constructor(){
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
        { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
        { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
        { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
      ]
    }
  }

  renderItems = () => {
    return this.state.userData.map((item) => (
      <React.Fragment key={item.id}>
        <div className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </div>
      </React.Fragment>
    ));
  };

  filterByUserType = (userType) => {
    return this.state.userData.filter((item) => item.user_type === userType);
  };

  filterByStartingLetter = (letter) => {
    return this.state.userData.filter((item) => item.name.startsWith(letter));
  };

  filterByAgeRange = (minAge, maxAge) => {
    return this.state.userData.filter((item) => item.age > minAge && item.age <= maxAge);
  };

  totalExperienceOfDesigners = () => {
    const designers = this.state.userData.filter((item) => item.user_type === 'Designer');
    return designers.reduce((total, designer) => total + designer.years, 0);
  };

  render() {
    return (
      <div className="app-container">
        <div>
          <h2>Display all items</h2>
          <div className="display-box">
           {this.renderItems()}
          </div>
        </div>
        <div>
          <h2>Display based on UserType (Designer)</h2>
          <div className="display-box">
            {this.filterByUserType('Designer').map((item) => (
              <div key={item.id}>
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Filter all data starting with J</h2>
          <div className="display-box">
            {this.filterByStartingLetter('J').map((item) => (
              <div key={item.id}>
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Filter all data based on age greater than 28 and age less than or equal to 50</h2>
          <div className="display-box">
            {this.filterByAgeRange(28, 50).map((item) => (
              <div key={item.id}>
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Find the total years of the designers</h2>
          <div className="display-box">
            {this.totalExperienceOfDesigners()}
          </div>
        </div>
      </div>
    );
  }
}

export default HigherOrderComponent;
