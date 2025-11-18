"use client"

import { createContext, useContext, useState } from 'react';

const PopUpContextAuth = createContext();

export function PopUpAuthProvider({ children }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const openPopUp = (newTitle, newSubtitle = '') => {
    setTitle(newTitle);
    setSubtitle(newSubtitle);
    setIsPopUpOpen(true);
  };

  return (
    <PopUpContextAuth.Provider value={{ isPopUpOpen, setIsPopUpOpen, title, subtitle, openPopUp }}>
      {children}
    </PopUpContextAuth.Provider>
  )
}

export function usePopUpAuth() {
  return useContext(PopUpContextAuth);
}
