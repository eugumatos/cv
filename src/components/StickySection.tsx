import { useEffect, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type StickySection = {
  children?: ReactNode;
};

export function StickySection({ children }: StickySection) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0, // Trigger animation as soon as the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: -50,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="sticky"
      animate={controls}
      initial={{ opacity: 0, y: -50 }}
    >
      {children}
    </motion.div>
  );
}
