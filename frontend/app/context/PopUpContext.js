"use client"

import { createContext, useContext, useState } from 'react';

const PopUpContext = createContext();

export function PopUpProvider({ children }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <PopUpContext.Provider value={{ isPopUpOpen, setIsPopUpOpen }}>
      {children}
    </PopUpContext.Provider>
  )
}

export function usePopUp() {
  return useContext(PopUpContext);
}