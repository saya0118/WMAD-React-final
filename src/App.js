import React from 'react'
import Navbar from './components/Navbar'
import './index.scss'
import Table from './components/Table'
import 'semantic-ui-css/semantic.min.css'
import SearchBar from './components/SearchBar'
// import {Switch, Router} from 'react-router-dom'
import AddForm from './components/form/add';
import EditForm from './components/form/edit';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <Table/>
      <AddForm/>
      <EditForm/>
    </div>
  );
}

export default App;
