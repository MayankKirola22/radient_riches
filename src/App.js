import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Screens/Home';
import WebFont from 'webfontloader';

function App() {
  const [country,setCountry] = useState('United States')
  let BuilderInfo=[
    {id:1,heading:'WixPro 72-Inch Responsive Website Builder',intro:'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',mainHighlights:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',imgCaption:'Builder 1',tag:1,remark:'Exceptional',rating:9.8,stars:5},
    {id:2,heading:'SiteCraft 68-Inch Ultimate Web Design Studio',intro:'Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',mainHighlights:'[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.',imgCaption:'Builder',remark:'Excellent',tag:2,rating:9.5,stars:4.5},
    {id:3,heading:'WixPro 72-Inch Responsive Website Builder',intro:'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',mainHighlights:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',imgCaption:'Builder 1',remark:'Exceptional',rating:9.3,stars:5},
    {id:4,heading:'CDK Resposive Builder',intro:'An extensive library of widgets and apps, and detailed step-by-step guides',rating:9.1,stars:3.5,remark:'Very Good',mainHighlights:{features:["Building Responsive","Cool","Docs"],values:[9.9,8.9,8.9]},deals:["26% off"],whyWeLove:{True:["Documentation",'Easy Use','Out of box'],False:[]},imgCaption:'CDK'}
  ]
  let BuilderInfoCompact=[
    {heading:"Webbuilder 1",Caption:'Computer  Modern clasic with wix support',price:49.96,discount:20,deals:["20% off","Limited Time"]},
    {heading:"Webbuilder 1",Caption:'Computer  Modern clasic with wix support',price:49.96,discount:20,deals:["20% off","Limited Time"]},
    {heading:"Webbuilder 1",Caption:'Computer  Modern clasic with wix support',price:49.96,discount:20,deals:["20% off","Limited Time"]},
  ]

  WebFont.load({
    google: {
      families: ['Inter']
    }
});

  return (
    <div className="App">
      <Navbar/>
      <Home BuilderInfo={BuilderInfo} BuilderCompact={BuilderInfoCompact}/>
      <Footer country={country} setCountry={setCountry}/>
    </div>
  );
}

export default App;
