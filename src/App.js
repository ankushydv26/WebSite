import React from 'react';

//Components
import Main from "./component/main"
import Gf from "./component/navbar"
import Cards from  "./component/cards"
import Banner from  "./component/banner"
import CardRow from "./component/cardRow"
import Footer from  "./component/footer"
import FooterEnd from  "./component/footerEnd"


import Slider from "./component/Slider"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <Main/>
     <Gf/>
     <Slider/>
     <Cards/>
     <Banner/>
     <CardRow/>
     <Footer/> 
     <FooterEnd/>
    </div>
  );
}

export default App;
