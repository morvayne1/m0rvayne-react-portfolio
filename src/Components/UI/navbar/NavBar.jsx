import React, {useState} from 'react'
import classes from './NavBar.module.css'

const NavBar = () => {
  const [signText, setSignText] = useState('Sign In');

  const handleSignIn = () => {
    setSignText('Signing...');
    setTimeout(() => {
      setSignText('Sign In');
    }, 2000);
  };

  return (
    <div className={classes.nav}>
      <div className={classes.navLeft}><strong>m0rvayne</strong></div>
      <div className={classes.navRight}>
        <button>Home</button>
        <button>More</button>
        <button 
          className={classes.signBtn}
          onClick={handleSignIn}
        >
          {signText}
        </button>
      </div>
    </div>
  )
}

export default NavBar
