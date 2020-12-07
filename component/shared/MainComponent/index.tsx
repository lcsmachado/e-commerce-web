import React from 'react';

const MainComponent: React.FC = ({ children }) => {
  return (
    <div className='d-flex flex-column stichy-footer-wrapper'>
      Header
      { children }
      Footer
    </div>
  )
}

export default MainComponent;
