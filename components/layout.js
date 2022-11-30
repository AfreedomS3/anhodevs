import { motion } from "framer-motion";

function Layout({ children }) {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0, width: '100%', height: '100%' },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 200},
    }

    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear', duration: 0.2 }}
        >
            {children}
        </motion.div> 
    );
}

export default Layout;
