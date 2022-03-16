import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import React, { useState } from 'react';

function App() {
  const [subjectTitle, setSubjectTitle] = useState("WEB");
  const [subjectSub, setSubjectSub] = useState("world wide web");
  return (
    <div className="App">
        <Subject title={subjectTitle} sub={subjectSub}></Subject>
        <TOC></TOC>
        <Content></Content>
    </div>
  );
}

export default App;
