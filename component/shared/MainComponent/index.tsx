import React from 'react';
import Header from '../Header/StotefrontHeader';


const MainComponent: React.FC = ({ children }) => {
  return (
    <div className='d-flex flex-column stichy-footer-wrapper'>
      <Header/>
      <div className='container flex-fill'>
        { children }
      </div>
    </div>
  )
}

export default MainComponent;
