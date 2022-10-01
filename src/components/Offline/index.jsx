import React, { useEffect, useState } from 'react';

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(
    () => {
      console.log('mounted');
      window.addEventListener('offline', handleOffline);
      window.addEventListener('online', handleOnline);

    return () => {
      console.log('unmounted');
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    }
  },
    []
  );

  const handleOffline = () => {
    setIsOnline(false);
    console.log('offline');
  };

  const handleOnline = () => {
    setIsOnline(true)
  };


  if (isOnline) {
    return (
      <p>Všechno v pořádku</p>
    )
  };

  return (
    <p>Jste offline!</p>
  );
};

export default Offline;