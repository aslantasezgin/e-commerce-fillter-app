import { createContext } from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import MainArea from './components/MainArea/MainArea.component';
import { useContext } from "react";
import { useState } from "react";

export const Context = createContext()

    const ContexProvider = ({children}) => {
    const [basketCount, setBasketCount] = useState(0)

    return(
        <Context.Provider value={{basketCount, setBasketCount}}>
            {children}
        </Context.Provider>
    )

}




function App() {
  return (
    <ContexProvider>
    <div className="App">
      <Header></Header>
      <MainArea></MainArea>
    </div>
    </ContexProvider>
  );
}

export default App;
