import React, { Component } from 'react';
import Course from './Course';
import { URL_API } from './../../constants/api';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

class CourseList extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch(URL_API).then(res => (
            res.json()
        )).then(json => 
            this.setState({
                data: json,
            })
        ).catch(res =>
            this.setState({
                data: {}
            })
        );
    }
    
    renderObjects = (data) => {
        

        return (
            Object.keys(data).map(cursoId => (
                <Col sm={12} md={6} lg={4} key={`${cursoId}`} style={{'display': 'flex', 'alignContent': 'space-between'}}>
                    <Course key={`${cursoId}`} data={{cursoId: cursoId, ...this.state.data[cursoId]}} className={"course"} /> 
                </Col>
            ))
        );
    };

    render() {
        const { data } = this.state;

        return (
            <div className="courseList">
                <Container>
                    <Row className="justify-content-center">
                            {
                                data ? 
                                (data === {} ?
                                    <p>Hubo un problema con el servidor. Lo sentimos...</p> :
                                    this.renderObjects(data)
                                    ):
                                    <Spinner animation="border" role="status">
                                        <span className="sr-only">Cargando...</span>
                                    </Spinner>
                                }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CourseList;