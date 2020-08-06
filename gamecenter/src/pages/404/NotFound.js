import React, {  } from 'react'
import  classes from './NotFound.module.css'


const NotFound =()=>{
    return(
        <div>
        <div id={classes.notfound}>
          <div className={classes.notfound}>
            <div className={classes['notfound-404']}>
              <div></div>
              <h1>404</h1>
            </div>
            <h2>Page not found</h2>
            <p>
              The page you are looking for might have been removed had its name changed or is temporarily
              unavailable.
            </p>
          </div>
        </div>
      </div>
    )
}

export default NotFound