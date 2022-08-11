import './Footer.scss';
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='app__footer'>
      <div className='app__footer-info'>
        <div className='app__footer-detail'>
          <h2>Aaron Chan</h2>
          <p>Web Developer Based in Toronto</p>
        </div>
        <div className='app__footer-detail'>
          <h2>Social</h2>
          <div>
            <a href='https://www.linkedin.com/in/aaronchan-webdev' target='_blank'><FaLinkedinIn /></a>
            <a href='https://github.com/aaronhpchan' target='_blank'><FaGithub /></a>
            <a href='https://codepen.io/aaronhpchan' target='_blank'><FaCodepen /></a>
          </div>
        </div>
      </div>
      <div className='app__footer-copyright'>
        <p>
          <span>&copy; Copyright 2022. Developed by </span>
          <span><a href='/' target='_blank'>Aaron Chan</a></span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;