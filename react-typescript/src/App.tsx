import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './App.css';
import ContactUS from './components/contactus';
import Partners from './components/partners';
import Categories from './components/categories';

const App: React.FC = () => {
  const slides = [
    {
      src: './pav_bhaji.jpeg',
      altText: 'Pav Bhaji',
      header: 'Pav Bhaji'
    },
    {
      src: './nachos.jpg',
      altText: 'Nachos',
      header: 'Nachos'
    },
    {
      src: './pasta.jpg',
      altText: 'Red Sauce Pasta',
      header: 'Red Sauce Pasta'
    }
  ];

  return (
    <div>
      <UncontrolledCarousel captionText="Home-page" cssModule={{ 'width': '300px' }} items={slides} />
      <Categories />
      <div className="partner-main">
        <h3 className="partner-title">Our Partners</h3>
        <Partners />
      </div>
      <ContactUS />
    </div>
  );
}

export default App;
