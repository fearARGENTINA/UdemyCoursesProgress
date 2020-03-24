import React, { Component } from 'react';
import './App.css';
import Course from './components/Course';
import { URL_API } from './constants/api';

class App extends Component {

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
        <div className="App">
          {
            data ? 
              (data === {} ?
                <p>Hubo un problema con el servidor. Lo sentimos...</p> :
                Object.keys(data).map(cursoId => <Course key={`${cursoId}`} data={{cursoId: cursoId, ...this.state.data[cursoId]}} />)) :
              <p>Cargando...</p>
          }
        </div>
      );
    }
}

export default App;
