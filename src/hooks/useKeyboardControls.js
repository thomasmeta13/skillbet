import { useEffect } from 'react';

const useKeyboardControls = (keyMap, initialDelay, repeatRate) => {
  useEffect(() => {
    let timeoutId = null;
    let intervalId = null;

    const keydownHandler = (event) => {
      if (keyMap[event.code]) {
        event.preventDefault();

        if (!timeoutId) {console.log('start', event.code);
          keyMap[event.code]();
          timeoutId = setTimeout(() => {
            intervalId = setInterval(() => keyMap[event.code](), repeatRate);
          }, initialDelay);
        }
      }
    };

    const keyupHandler = (event) => {
      if (keyMap[event.code]) {console.log('end', event.code);
        event.preventDefault();
        clearTimeout(timeoutId);
        clearInterval(intervalId);
        timeoutId = null;
        intervalId = null;
      }
    };
    
    window.addEventListener('keydown', keydownHandler);
    window.addEventListener('keyup', keyupHandler);

    return () => {
      window.removeEventListener('keydown', keydownHandler);
      window.removeEventListener('keyup', keyupHandler);
    };
  }, [keyMap, initialDelay, repeatRate]);
};

export default useKeyboardControls;