import { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import './Marquee.scss';

const Marquee = () => {
  const [skills, setSkills] = useState([]);
  const skillsArray = [...skills, ...skills, ...skills];
    
  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then(data => {
      setSkills(data);
    })
  }, []);
  
  return (
    <div className='app__marquee'>
      <div className='app__marquee-container'>
        <div className='app__marquee-section'>
          {skillsArray.map((skill, i) => (
            <div className='app__marquee-skill' key={i}>
              <img src={urlFor(skill.icon)} alt={skill.name} className='app__marquee-icon' />  
              <span> {skill.name} </span>    
            </div>
          ))}       
        </div>
      </div>
    </div>
  );
}

export default Marquee;