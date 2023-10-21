import "../homepage/IntroSlideshow.css";
import { motion, useInView, useAnimation } from "framer-motion";
import Navbar from "../navbar/Navbar";

// imgs

import { useState, useEffect, useRef } from "react";

function IntroSlideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLastSlide = currentIndex === slides.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  const animationRef = useRef(null);
  const isInView = useInView(animationRef);
  const mainControls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 5000);
  });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div className='intro-slideshow-container'>
        <div className='intro-slideshow' ref={animationRef}>
          <motion.div
            className='intro-message'
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <motion.h1
              className='intro-message-content'
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial='hidden'
              animate={mainControls}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              southwest Michigan's leader in commercial and multi-family housing
              development
            </motion.h1>
          </motion.div>
          <img src={slides[currentIndex]} className='intro-img' />
        </div>
      </div>
    </>
  );
}
export default IntroSlideshow;
