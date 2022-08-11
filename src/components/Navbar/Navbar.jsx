import { useState } from 'react';
import './Navbar.scss';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => toggle ? setToggle(false) : setToggle(true);
  
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href='#home'><img src={require('../../images/logo_kiez_slanted.png')}/></a>
      </div>
      <div className='app__navbar-items'>
        <ul className='app__navbar-links'>
          {['home', 'projects', 'about', 'skills'].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div 
          className='app__navbar-btn' 
          style={{ 'backgroundColor': toggle ? 'var(--secondary-color)' : 'var(--black-color)' }}
          onClick={() => handleToggle()}       
        >
          <BiMenu />      
        </div>

        <a className='app__navbar-contact' href='#contact'>contact</a>    
      </div>
      
      {toggle && (          
        <ul className='app__navbar-menu'>
          {['home', 'projects', 'about', 'skills', 'contact'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
            </li>
          ))}
        </ul>        
      )}
    </nav>
  );
}

export default Navbar;