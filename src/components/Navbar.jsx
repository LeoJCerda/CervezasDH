//import React from 'react'
import { routes } from '../utils/routes'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Beer from '../Beer'


const Navbar = () => {
  
  const navigate = useNavigate()
  
  return (
    <div className='nav' >
        <div className='links'>
          <button onClick={() => navigate(-1)}>↩Back</button>
            <Link to={routes.home}><h4 className='link'>Home</h4></Link>
            <Link to='/contacto'><h4 className='link'>Contact</h4></Link>
            
            
            
        </div>
        {/* <input className='search' type="text" onBlur={(e) => setSearch(e.target.value)}/> */}
    </div>
  )
}
console.log(Beer);
export default Navbar