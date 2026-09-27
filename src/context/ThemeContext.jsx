
import {  createContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({Children}) =>{

     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
     

     const changeTheme = (userTheme)=>{

          setTheme(userTheme);
     }
     
     return(
          <ThemeContext.Provider value={{theme, changeTheme}}>
               {Children}
          </ThemeContext.Provider>
     )
}