import React, { useRef,useState,useEffect } from 'react';
import Spinner from './components/Spinner';
import Layout from "./components/Layout";
import Contact from './views/contact';
import Location from './views/location';
import Clients from './views/clients';
import Banner from './components/Banner';
import Hero from './views/hero';

function App() {
  const contactRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);
  return (
  <>
    {
    isLoading ? <Spinner /> :
      <Layout>
      <Hero contactRef={contactRef}/>
      <Contact ref={contactRef}/>
      <Location/>
      <Clients/>
      <Banner/>
      </Layout>
    }
  </>
  );
}

export default App;
