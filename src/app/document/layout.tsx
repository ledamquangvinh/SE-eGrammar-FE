import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const DocumentLayout = ({children} : {children: React.ReactNode}) => {
  return ( 
    <>
      <Header />
        {children}
      <Footer />
    </>

   );
}
 
export default DocumentLayout;