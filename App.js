import React, { useState } from 'react';
import Loader from './components/Loader';
import Instructions from './components/Instructions';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <Instructions />
      )}
    </>
  );
}
