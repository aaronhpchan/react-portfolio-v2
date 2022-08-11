import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  return (
    <div className='app__about' id='about'>
      <motion.div 
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__about-container'
      >
        <p className='app__about-name'><span>Aa</span>ron Chan</p>
        <h1>Web<br/>Developer</h1>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.75 }}
        className='app__about-container'
      >
        <div className='app__about-info'>
          <div>
            <p>Based In</p>
            <p className='app__about-name'>Toronto, ON</p>
          </div>
          <div>
            <p>Specializes In</p>
            <p className='app__about-name'>Front-end dev</p>
          </div>
        </div>
        <p className='app__about-detail'>
          I enjoy learning new skills, solving problems, and most importantly building things on the web. 
          Nothing quite compares to the satisfaction I feel whenever I've learned a new skill or built a new project.
        </p>
      </motion.div>
    </div>
  );
}

export default About;