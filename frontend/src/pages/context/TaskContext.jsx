import { createContext } from "react";

export const TaskContext = createContext();


export const TaskProvider = ({children}) => {
  
  const contextData ={
  
  }


  return (
    <TaskContext.Provider value={contextData}>
        {children}
    </TaskContext.Provider >
  )


}