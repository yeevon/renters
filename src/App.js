import React from 'react'
import './App.css'

function App () {
  return (
    <div className="App">
      <div>
        <label className='inputLabel'>Enter your Zip Code: </label>
        <input className='zipCodeEntry' id='cusZip' placeholder='12345'></input>
      </div>
      <div>
        <button className='button' id='submitZip'>Submit</button>
      </div>
      <div>
        <label className='yourRent'>YADYADAYADAYADAYADAYADA</label>
      </div>
    </div>
  )
}

export default App
