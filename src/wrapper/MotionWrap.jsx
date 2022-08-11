import { motion } from 'framer-motion';

const MotionWrap = (Component, className, idName) => function HOC() {
  return (
    <div id={idName}>
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${className} app__flex`}
    >
      <Component />
    </motion.div>
    </div>
  );
};

export default MotionWrap;