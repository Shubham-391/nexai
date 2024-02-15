import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2';

function App() {

  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <Section1 />
        <Section2/>
      </div>
    </>
  );
}

export default App
