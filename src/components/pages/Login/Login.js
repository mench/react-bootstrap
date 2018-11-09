import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import LoignForm from './LoginForm'


class Login extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" sm={{size:6,offset:3}}>
                        <LoignForm />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;