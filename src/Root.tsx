import React from 'react';
import Navbar from './components/Navbar';
import Map from './components/Map';
import ErrorBoundary from './components/ErrorBoundary';

const Root = () => {
  return (
    <ErrorBoundary>
      <div>
        <Navbar />
        <Map />
      </div>
    </ErrorBoundary>
  );
};

export default Root;
