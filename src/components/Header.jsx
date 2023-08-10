import React from 'react'
import { Link } from 'react-router-dom'

export default function header(back) {
  return (
    <header className='header'>
        <div className="width">
            {back && (
            <Link to='/'>   
<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z"/></svg>
            </Link>
            )}
            <h1>
                <Link to="/">coiner</Link>
            </h1>
        </div>
    </header>
  )
}
