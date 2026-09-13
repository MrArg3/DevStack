import { Suspense } from 'react';
import Banner from './components/Banner'
import Nav from './components/Nav'
import Technologies from './components/Technologies/Technologies'
import type { TechType } from './components/Type/TechType'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

const techDataFetch = async (): Promise<TechType[]> => {
  const response = await fetch('/tech_data.json');
  return response.json();
};
console.log(techDataFetch());

function App() {
  const techData = techDataFetch();
  return (
    <>
      <Nav />
      <Banner />
      <ToastContainer position="bottom-right" autoClose={2500} />
      <Suspense fallback={<div>Loading...</div>}>
      <Technologies techData={techData} />
      </Suspense>


      <Footer/>
      
      
    </>
  )
}

export default App
