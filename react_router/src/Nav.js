import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {


    return (
        <div>
            <nav>
                <ul>
                    <Link to="/About"><li>About</li></Link>
                    <Link to="/Contact"><li>Contact</li></Link>
                    <Link to="/"><li>Home</li></Link>
                </ul>
            </nav>
        </div>

    )
}

export default Nav;