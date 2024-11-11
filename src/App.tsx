import './App.css'
import Header from "./components/Header";
import Cards from "./components/Cards";
import {createContext, Dispatch, useState} from "react";
import Search from "./components/Search";
import {RouterProvider} from "react-router-dom";
import router from "./router";


type ContextType = {
    theme: string,
    setTheme: Dispatch<React.SetStateAction<string>>
};

export const ThemeContext = createContext<ContextType | null>(null);

function App() {
    // const [filterValue, setFilterValue] = useState('');
    // const [theme, setTheme] = useState('light');

  return (
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App
// <ThemeContext.Provider value={{theme, setTheme}}>
// <div className={`container ${theme}`}>
// <Header />
// <Search setFilterValue={setFilterValue} />
// <Cards filterValue={filterValue} />
// </div>
// </ThemeContext.Provider>