import { Suspense } from 'react';
import Banner from './components/Banner'
import Nav from './components/Nav'
import Technologies from './components/Technologies/Technologies'
import type { TechType } from './components/Type/TechType'

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
      <Suspense fallback={<div>Loading...</div>}>
      <Technologies techData={techData} />
      </Suspense>
      
      
    </>
  )
}

export default App
