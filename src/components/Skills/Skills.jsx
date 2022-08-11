import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
    
  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then(data => {
      setSkills(data);
    })
  }, []);
  
  return (
    <div>
      <h2 className='head-text'>Skills</h2>
      <div className='head-underline' />
      <motion.div className='app__skills-list'>
        {skills.map(skill => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item app__flex'
            key={skill.name}
          >
            <div className='app__flex'>
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default MotionWrap(Skills, 'app__skills', 'skills');