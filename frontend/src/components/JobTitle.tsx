
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JobTitle = () => {
  const titles = ["DevOps Engineer", "Data Analyst"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.h2
        key={titles[currentIndex]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="heading-md mb-8 text-muted-foreground"
      >
        {titles[currentIndex]}
      </motion.h2>
    </AnimatePresence>
  );
};

export default JobTitle;
