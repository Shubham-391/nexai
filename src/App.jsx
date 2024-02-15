import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section1 from './components/Section1'

function App() {

  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <Section1 />
      </div>
    </>
  );
}

export default App
