import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <nav style={{background: 'grey',color: 'red', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <div>
        <h1>Locations</h1>
      </div>
      <div style={{textDecoration:  'none',  display: 'flex', gap: '10px'}}>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}> Home </Link>
        <Link to='display' style={{ textDecoration: 'none', color: 'black' }}> Display </Link>
        <Link to='dog' style={{ textDecoration: 'none', color: 'black' }}> Dog </Link>
        <Link to='form' style={{ textDecoration: 'none', color: 'black' }}> Form </Link>
      </div>

    </nav>
  )
}

export default navbar
