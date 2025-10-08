"use client"
import { createContext, useState, useEffect } from 'react';

const PageWidthContext = createContext(null);

export function PageWidthProvider({ children }) {
 const [pageWidth, setPageWidth] = useState(0);

 useEffect(() => {
  const handleResize = () => setPageWidth(window.innerWidth);
  handleResize();
  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
 }, []);

 if (pageWidth === 0) return null;

 return (
  <PageWidthContext.Provider value={{ pageWidth }}>
   {children}
  </PageWidthContext.Provider>
 );
}

export default PageWidthContext;
