import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Layout from '../components/layout';

export default function Home({ setInitial, initialState }) {
  const variants = {
    visible: initialState ? { opacity: 1, x: 0} : undefined,
    hidden: initialState ? { opacity: 0, x: -200 } : undefined,
  }
  
  useEffect(() => {
    return () => {
      setInitial(false);
    };
  });

  return (
    <Layout>
      <div className={styles.home}>
        <div>
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{duration: 1.5, delay: 0.2}}
          >
            ANHO <span>Devs</span>
          </motion.h1>
          <motion.p
            initial={initialState ? {opacity: 0} : undefined}
            animate="visible"
            variants={variants}
            transition={{duration: 1.5, delay: 1.2}}
          >
            Hola, mi nombre es <span>Andrés Hoyos</span>, soy desarrollador web.
          </motion.p>
          <motion.div
              initial={initialState ? {opacity: 0} : undefined}
              animate="visible"
              variants={variants}
              transition={{duration: 1, delay: 1.7}}
          > 
            <Link href="/about" legacyBehavior >
              <a>Más sobre mí</a>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
