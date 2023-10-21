import "../homepage/Homepage.css";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function StatementText() {
  const textRef = useRef(null);
  const inView = useInView(textRef);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [inView]);
  return (
    <>
      <div className='homepage-statement-intro'>
        <h2 className='homepage-statement-text'>
          <div
            className='homepage-statement-row-1'
            id='desktop-statement'
            ref={textRef}
          >
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              animate={controls}
            >
              Offering turn-key
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              animate={controls}
            >
              business solutions
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
              animate={controls}
            >
              and top tier service,
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ delay: 2.0, duration: 1 }}
              animate={controls}
            >
              specializing in ...
            </motion.span>
          </div>
          <div className='homepage-statement-row-1' id='mobile-statement'>
            <p>
              Offering turn-kay business solutions and top tier service,
              specializing in...
            </p>
          </div>
        </h2>
      </div>
    </>
  );
}
export default StatementText;
