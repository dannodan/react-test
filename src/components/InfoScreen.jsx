import React, { Component } from 'react'
import { PageHeader, Avatar, Card, Row, Col } from 'antd';
import { get } from 'axios';

export default class InfoScreen extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            avatar_url: null,
            name: null,
            location: null
        }
    }

    async componentDidMount() {
        const { user } = this.props;
        const githubUser = await get(`https://api.github.com/users/${user}`);
        const { avatar_url, location, name } = githubUser.data;
        console.log(githubUser);
        this.setState({avatar_url, name, location, loading: false})
    }

    render() {
        const { onBack } = this.props;
        const { avatar_url, name, location } = this.state;
        return (
            <React.Fragment>
                <PageHeader title="Person" onBack={onBack}/>
                <Row type="flex" justify="center">
                    <Col xs={22} md={12} lg={8}>
                            <Card>
                                <Card.Meta
                                    avatar={<Avatar size={64} src={avatar_url}/>}
                                    title={<h4>{name}</h4>}
                                    description={location}
                                />
                            </Card>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
