import React, { useRef } from 'react';
import Hero from './views/hero';
import Layout from "./components/Layout";
import Contact from './views/contact';
import Location from './views/location';
import Clients from './views/clients';
import Banner from './components/Banner';

function App() {
  const contactRef = useRef(null);
  return (
    <Layout>
      <Hero contactRef={contactRef}/>
      <Contact ref={contactRef}/>
      <Location/>
      <Clients/>
      <Banner/>
    </Layout>
    
  );
}

export default App;
