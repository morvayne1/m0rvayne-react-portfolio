import React from 'react'
import logo from './catavatar.jpg'
import classes from './About.module.css'

const About = () => {
  return (
    <div className={classes.block}>
      <img src={logo} alt="That's me" />
      <div className={classes.text}>
        <p>Yea, that's still my avatar!</p>
        <p>My main goal of life is to become a really good at programming and start do big projects, 
            enjoy the result, fixing bugs and be actually good at it.</p>
        <p>I study for 4-5 hours a day for 63 now and that what I can do, 
            actually I studying more JS stuff, solving codewars tasks, now I got 5kyu and 317 points . I think it is not that bad :D</p> 
        <p>I recently started learning React. So trying to build my portfolio site with that tool. It's a very cool and useful tool, but difficult to understand at first. I'll keep working hard!</p>  
    </div>
   
    </div>
  )
}

export default About
