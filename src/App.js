

import './App.css';
import { createContext } from 'react';
import { Component1 } from './component/Component1';
export const Mycontext = createContext();

function App() {
 let name ='honeywealth'
  return (
//  <>
    <Mycontext.Provider value={name}>
    <Component1/>
    </Mycontext.Provider>
//  </>
  );
}

export default App;
