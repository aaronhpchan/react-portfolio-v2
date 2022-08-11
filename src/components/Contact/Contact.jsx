import { useState } from 'react';
import { motion } from 'framer-motion';
import { MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = () => {
    setLoading(true);
    
    const contact = {
      //follow Sanity guideline
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    //use Sanity client to upload data to Sanity
    client.create(contact).then(() => {
      setLoading(false);
      setSubmitted(true);
    })
  }
  
  return (
    <div>
      <h2 className='head-text'>Contact</h2>
      <div className='head-underline'/>
      {!submitted ?
        <form className='app__contact-form app__flex'>
          <div>
            <label>Name</label>
            <input type='text' placeholder='Enter Your Name' name='name' value={name} onChange={handleChangeInput} />
          </div>
          <div>
            <label>Email</label>
            <input type='email' placeholder='Enter Your Email' name='email' value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <label>Message</label>
            <textarea
              placeholder='Enter Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='button' 
            onClick={handleSubmit}
          >
            {loading ? 'Sending' : 'Send Message'}
          </motion.button>
        </form>
        : <div className='app__contact-confirm'>
          <h3 className='head-text'>Thanks for getting in touch!</h3>
        </div>
      }
    </div>
  );
}

export default MotionWrap(Contact, 'app__contact', 'contact');