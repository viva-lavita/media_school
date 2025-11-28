import { Suspense } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './globals.css';
import Navigation from './components/Navigation/Navigation';
import { PageWidthProvider } from './context/PageWidthProvider';
import { PageTitleProvider } from './context/PageTitleContext';
import { montserrat, comfortaa, inter } from '@/lib/fonts';
import {PopUpProvider} from "@/app/context/PopUpContext";
import {PopUpAuthProvider} from "@/app/context/PopUpContextAuth";
import PopUpAttribution from "@/app/components/PopUpAttribution/PopUpAttribution";
import PopUpAuth from "@/app/components/PopUpAuth/PopUpAuth";
import {AuthProvider} from "@/app/context/AuthContext";
import SearchComponent from "@/app/components/SearchComponent/SearchComponent";
import {SearchProvider} from "@/app/context/SearchContext";

export const metadata = {
 title: 'Томск перспектива',
 description: 'Медиа-школа «Томск Перспектива» — обучение современным цифровым профессиям и творческим навыкам.'
};

export default function RootLayout({ children }) {
 return (
  <html
   lang="ru"
   className={`${montserrat.variable} ${comfortaa.variable} ${inter.variable}`}
  >
   <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   </head>
   <body>
   <AuthProvider>
    <PopUpProvider>
     <SearchProvider>
      <PopUpAttribution />
      <PopUpAuthProvider>
       <PopUpAuth />
       <PageTitleProvider>
        <PageWidthProvider>
         <Suspense fallback={<div>Loading...</div>}>
          <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
           <Header />
           <Navigation />
           <main style={{flex: 1}}>
            {children}
           </main>
           <Footer />
           <SearchComponent />
          </div>
         </Suspense>
        </PageWidthProvider>
       </PageTitleProvider>
      </PopUpAuthProvider>
     </SearchProvider>
    </PopUpProvider>
   </AuthProvider>
   </body>
  </html>
 );
}
