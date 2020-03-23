import React from 'react';
import './App.css';
import Course from './components/Course';

const data = {
  id: 1374394,
  title: "React JS + Redux + ES6. Completo ¡De 0 a experto! (español)",
  numLectures: 232,
  instructorJob: "Software Architect",
  instructorId: 20916876,
  completed: 100,
  lastAccessedTime: "2020-03-23T20:10:44Z",
  enrollmentTime: "2019-12-20T16:19:06Z",
  imgSrc: "https://i.udemycdn.com/course/240x135/1374394_f1a8_2.jpg",
};

function App() {
  return (
    <div className="App">  
      <Course data={data}/>
    </div>
  );
}

export default App;
