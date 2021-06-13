import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [ballColor, setBallColor] = useState('');
  const [ballCount, setBallCount] = useState({red: 0, blue: 0});
  const BALLOON_COOKIE = 'ballColor';

  const setRemainingBallCount = (updatedColor) => {
    let colorMissing = updatedColor === 'red' ? 'blue' : 'red';
    if( !(colorMissing in cookies) || !cookies[colorMissing] ) {
      setCookie(colorMissing, 0, {path: '/'});
      setBallCount(prevCount => ({...prevCount, [colorMissing]: 0}));
      return;
    }
    setBallCount(prevCount => ({...prevCount, [colorMissing]: cookies[colorMissing]}));
  };
  
  useEffect(() => {
    // Setting up new cookie
    if(cookies 
        && (!('ballColor' in cookies) || !cookies['ballColor']) 
        && !ballColor) {
      // Setting up New Color
      let newBallColor = Math.random() < 0.5 ? 'blue' : 'red';
      setBallColor(newBallColor);
      setCookie(BALLOON_COOKIE, newBallColor, {path: '/'});
      
      // Update ballcount
      let prevCount = (!(newBallColor in cookies) || !cookies[newBallColor])
        ? 0
        : parseInt(cookies[newBallColor]);
      let newCount = prevCount + 1;
      setBallCount(prevCount => ({...prevCount, [newBallColor]: newCount}));
      setCookie(newBallColor, newCount, {path: '/'});

      // fill out rest of missing cookie field. 
      setRemainingBallCount(newBallColor);
      return;
    }
    // Read from cookie
    let prevColor = cookies['ballColor'];
    if(prevColor !== ballColor){
      setBallColor(prevColor);
      let newCount = parseInt(cookies[prevColor]) + 1;
      setBallCount(prevCount => ({...prevCount, [prevColor]: newCount}));
      setCookie(prevColor, newCount, {path: '/'});
      setRemainingBallCount(prevColor);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ballColor]);

  const handleOnClick = (type) => {
    // eslint-disable-next-line default-case 
    switch(type){
      case 'resetBall': 
        removeCookie(BALLOON_COOKIE);
        setBallColor('');
        break;
    }
  }
  return (
    <Home 
      ballColor={ballColor} 
      redCount={ballCount.red}  
      blueCount={ballCount.blue}
      onClick={handleOnClick} />    
  );
}

export default App;
