import { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import './Projects.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query).then((data) => {
      setProjects(data);
    })
  }, [])
  
  return (
    <div className='app__projects app__flex' id='projects'>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.75 }}
      >
        <h2 className='head-text'>Projects</h2>
        <div className='head-underline' />
      </motion.div>
      {projects.map((project, i) => (
        <div className='app__projects-item' key={i}>
          <motion.div 
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__projects-img app__flex' 
            style={{ 'order': i % 2 === 0 ? '1' : '2' }}
          >
            <img src={urlFor(project.imgUrl)} alt={project.title} />  
          </motion.div>
          <motion.div 
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.75 }}
            className='app__projects-info' 
            style={{ 'order': i % 2 === 0 ? '2' : '1' }}
          >
            <div>
              <h3>{project.title}</h3>
              <div className='app__projects-badge'>{project.tags[0]}</div>
            </div>
            <p>{project.description}</p>
            <div>
              <a href={project.projectLink} target='_blank'>View Live</a>
              <a href={project.codeLink} target='_blank'>Read More</a>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Projects;