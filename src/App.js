import React from 'react'
import Navbar from './redux/Navbar'
import './index.scss'
import Table from './redux/Table'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Table/>
    </div>
  );
}

export default App;
