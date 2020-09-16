import React from 'react';
import {Link} from 'react-router-dom'
const Nav = ({names})=>{
    return <ul>
        {names.map(name=>
        <Link to={`/dogs/${name}`} 
            key={name}>
                <li>{name}</li>
        </Link>)}
        
    </ul>
}
export default Nav