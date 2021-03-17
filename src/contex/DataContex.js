import  React, { createContext, useState } from "react";

export const DataContex  = createContext();


const dataFix = {
    nombre: 'Estheixys',
    edad: 35 
  }


export const DataProvider = ({ children }) => {
    
    const [data, setData] = useState(dataFix)
    
    return (
        <DataContex.Provider value={{
            data,
            setData
        }}>
            { children }
        </DataContex.Provider>
    )
}
