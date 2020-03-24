import React, { Component } from 'react';
import Course from './Course';
import { URL_API } from './../../constants/api';
import './style.scss';

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
    
    render() {
        const { data } = this.state;

        return (
            <div className="courseList">
                {
                    data ? 
                        (data === {} ?
                            <p>Hubo un problema con el servidor. Lo sentimos...</p> :
                            Object.keys(data).map(cursoId => <Course key={`${cursoId}`} data={{cursoId: cursoId, ...this.state.data[cursoId]}} className={"course"} />)) :
                        <p>Cargando...</p>
                }
            </div>
        );
    }
}

export default CourseList;