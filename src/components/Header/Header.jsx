import { motion } from 'framer-motion';
import './Header.scss';

const Header = () => {
  return (
    <div className='app__header' id='home'>
      <div className='app__header-grid'>
        <motion.div
          whileInView={{ x: [-300, 0], opacity: [0, 1] }}
          transition={{ duration: 0.75 }}
          className='app__header-name'
        >
          <h1>Hi, I am Aaron</h1>
        </motion.div>
        <motion.div
          whileInView={{ x: [-300, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          className='app__header-info'
        >
          <p>Web Developer</p>
        </motion.div>
        <motion.div
          whileInView={{ x: [-300, 0], opacity: [0, 1] }}
          transition={{ duration: 2.25 }}
          className='app__header-info'
        >
          <p>Based in Toronto</p>
        </motion.div>       
        <motion.div
          whileInView={{ x: [-300, 0], opacity: [0, 1] }}
          transition={{ duration: 2.5 }}
        >
          <a href='#projects' className='app__header-btn'><button>Projects</button></a> 
        </motion.div>       
      </div>

      <motion.div 
        whileInView={{ x: [300, 0], opacity: [0, 1] }}
        transition={{ duration: 2.5 }}
        className='app__header-grid'
      >
        <img src={require('../../images/header_img.png')} alt='Header'/>
      </motion.div>
    </div>
  );
}

export default Header;