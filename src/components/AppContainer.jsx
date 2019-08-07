import React, { Component } from 'react'
import HomeScreen from './HomeScreen';
import { SCREEN } from '../constants/constants';
import InfoScreen from './InfoScreen';

export default class AppContainer extends Component {

    constructor() {
        super();
        this.state = {
            screen: SCREEN.HOME,
            user: null
        }
    }

    selectUser = (user) => {
        this.setState({screen: SCREEN.INFO, user});
    }

    goBack = () => {
        this.setState({screen: SCREEN.HOME});
    }

    render() {
        const { screen, user } = this.state;
        console.log(this.state);
        return (
            <React.Fragment>
                {
                    (screen === SCREEN.HOME) ?
                    <HomeScreen selectUser={this.selectUser}/> :
                    <InfoScreen onBack={this.goBack} user={user}/>
                }
            </React.Fragment>
        )
    }
}
