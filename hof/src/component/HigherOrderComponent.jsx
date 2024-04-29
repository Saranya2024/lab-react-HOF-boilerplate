import React, { Component } from 'react';

class HigherOrderComponent extends Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
            ]
        };
    }


// PROGRESSION 2 | LIST ALL ITEMS

    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <div className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </div>
            </React.Fragment>
        ));
        return mapRows;
    };

    render() {
        return (
            <React.Fragment>
                <h1>Display all items</h1>
                <div className="display-box">
                    {this.renderItems()}
                </div>
            </React.Fragment>
        );
    }


// PROGRESSION 3 | LIST ALL DATA BASED ON USERTYPE   

    // renderItemsByUserType = (userType) => {
    //     const data = this.state.userData.filter(item => item.user_type === userType);
    //     const mapRows = data.map((item) => (
    //         <React.Fragment key={item.id}>
    //             <div className="list-elements">
    //                 <span>Id: {item.id}</span>
    //                 <span>Name: {item.name}</span>
    //                 <span>User Type: {item.user_type}</span>
    //             </div>
    //         </React.Fragment>
    //     ));
    //     return mapRows;
    // };

    // render() {
    //     return (
    //         <React.Fragment>
    //             <h1>Display based on UserType</h1>
    //             <div className="display-box">
    //                 {this.renderItemsByUserType('Designer')}
    //             </div>
    //         </React.Fragment>
    //     );
    // }


//  PROGRESSION 4 | FILTER ALL DATA STARTING WITH THE LETTER J

    // renderItemsStartingWithJ = () => {
    //     const data = this.state.userData.filter(item => item.name.startsWith('J'));
    //     const mapRows = data.map((item) => (
    //         <React.Fragment key={item.id}>
    //             <div className="list-elements">
    //                 <span>Id: {item.id}</span>
    //                 <span>Name: {item.name}</span>
    //                 <span>User Type: {item.user_type}</span>
    //             </div>
    //         </React.Fragment>
    //     ));
    //     return mapRows;
    // };

    // render() {
    //     return (
    //         <React.Fragment>
    //             <h1>Filter all data starting with J</h1>
    //             <div className="display-box">
    //                 {this.renderItemsStartingWithJ()}
    //             </div>
    //         </React.Fragment>
    //     );
    // }


// PROGRESSION 5 | FILTER DATA BASED ON AGE
       
    // renderItemsByAgeRange = () => {
    //     const data = this.state.userData.filter(item => item.age > 28 && item.age <= 50);
    //     const mapRows = data.map((item) => (
    //     <React.Fragment key={item.id}>
    //         <div className="list-elements">
    //             <span>Id: {item.id}</span>
    //             <span>Name: {item.name}</span>
    //             <span>User Type: {item.user_type}</span>
    //         </div>
    //     </React.Fragment>
    //     ));
    //     return mapRows;
    // };

    // render() {
    //     return (
    //     <React.Fragment>
    //         <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
    //         <div className="display-box">
    //             {this.renderItemsByAgeRange()}
    //         </div>
    //     </React.Fragment>
    //     );
    // }


// PROGRESSION 6 | FIND THE TOTAL EXPERIENCE OF THE DESIGNERS

    // getTotalExperienceOfDesigners = () => {
    //     const designers = this.state.userData.filter(item => item.user_type === 'Designer');
    //     const totalExperience = designers.reduce((acc, curr) => acc + curr.years, 0);
    //     return totalExperience;
    // };

    // render() {
    //     return (
    //     <React.Fragment>
    //         <h1>Find the total years of the designers</h1>
    //         <div className="display-box">
    //             <p>{this.getTotalExperienceOfDesigners()}</p>
    //         </div>
    //     </React.Fragment>
    //     );
    // }

}

export default HigherOrderComponent;



