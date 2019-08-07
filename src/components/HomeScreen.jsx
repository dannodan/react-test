import React, { Component } from 'react'
import { PageHeader, Button } from 'antd';

export default class HomeScreen extends Component {

    selectUser = (user) => () => {
        const { selectUser } = this.props;
        selectUser(user);
    }

    renderUsers = () => {
        const topFive = [
            "GrahamCampbell", "fabpot", "weierophinney", "rhk", "josh"
        ]

        return topFive.map((entry, index) => <Button className="user-button" key={`user-${index}`} onClick={this.selectUser(entry)}>{entry}</Button>);
    }

    render() {
        return (
            <React.Fragment>
                <PageHeader className="page-header" title="Home" backIcon={false}/>
                <h1>Top 5 GitHub Users</h1>
                <p>Tap the username to see more information</p>
                {this.renderUsers()}
            </React.Fragment>
        )
    }
}
