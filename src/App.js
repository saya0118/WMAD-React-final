import React from 'react'
import Navbar from './redux/Navbar'
import './index.scss'
import Table from './redux/Table'
import 'semantic-ui-css/semantic.min.css'
import SearchBar from './redux/SearchBar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <Table/>
    </div>
  );
}

export default App;
