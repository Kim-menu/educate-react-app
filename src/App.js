import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import React, { useState } from 'react';

function App() {
  const [subjectTitle, setSubjectTitle] = useState("WEB");
  const [subjectSub, setSubjectSub] = useState("world wide web");
  const topics = [
    {id: 1, title: 'html', body: 'html is...'},
    {id: 2, title: 'css', body: 'css is...'},
    {id: 3, title: 'javascript', body: 'javascript is...'}
  ];
  return (
    <div className="App">
        <Subject title={subjectTitle} sub={subjectSub} onChangeMode={() => {
        alert('Header');
        }}></Subject>
        <TOC topics={topics} onChangeMode={(id) => {
        alert(id);
        }}></TOC>
        <Content></Content>
    </div>
  );
}

export default App;
