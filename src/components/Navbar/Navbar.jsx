import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Navbar = () => {
  return (
    <nav>
        <img src="/img/logo.png" alt="travelo" className='logo'/>
        <ul>
            <li>
                <a href="#">Login</a>
            </li>
            <li>
                <a href="#">Sign up</a>
            </li>
            <li className='search'>
                <a href="#">
                 <SearchIcon/>
                </a>
            </li>

            <li className="hamburger">
                <a href="#">
                    <div className="bar">
                        
                    </div>
                </a>
            </li>


        </ul>
    </nav>
  )
}

export default Navbar
