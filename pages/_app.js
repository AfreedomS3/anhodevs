import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import NavMenu from '../components/nav-menu/nav-menu';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function MyApp({ Component, pageProps }) {
  const [initial, setInitial] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const url = useRouter().asPath;

  const handleOnClick = () => {
    const element = document.getElementById('nav-menu');
    if (element.style.visibility === 'hidden' || element.style.visibility === '') {
      element.style.visibility = 'visible';
      element.style.transform = 'translateX(0px)';
    } else {
      element.style.visibility = 'hidden';
      element.style.transform = 'translateX(-300px)';
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content='width:device-width, initial-scale=1.0' />
        <title>ANHO Devs - Portafolio Web</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" type="module" />
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" type="module" />
      <NavMenu isLoggedIn={isLoggedIn} updateSession={setIsLoggedIn} />
      <main style={{backgroundColor: url === "/" ? '#2A5265' : '#E9F1F7'}}>
        <div id='menu-button' className='menu-button' onClick={handleOnClick}>
          <span><MenuOutlinedIcon sx={{fontSize: '1.5rem'}} /></span>
        </div> 
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} 
            initialState={initial} 
            setInitial={setInitial} 
            isLoggedIn={isLoggedIn}
            updateSession={setIsLoggedIn}
            key={url}
          />  
        </AnimatePresence>      
      </main>
    </>
  );
}

export default MyApp;
