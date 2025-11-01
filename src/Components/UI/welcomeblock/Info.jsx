import React from 'react'
import classes from './Info.module.css'

const Info = () => {
  return (
    <div className={classes.main}>
        <div className={classes.welcomeText}>
            <h1>Hello, I'm Daniil</h1>
            <p>And this is React version of my porfolio</p>
        </div>
        <div>
            <button className={classes.checkBtn}>Check what is new!</button>
        </div>
    </div>
  )
}

export default Info
