import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {originals,action,comedy,horror,romance,documentaries} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='comedy' isSmall />
      <RowPost url={horror} title='horror' isSmall />
      <RowPost url={romance} title='romance' isSmall />
      <RowPost url={documentaries} title='documentaries'/>
    </div>
  )
}

export default App
