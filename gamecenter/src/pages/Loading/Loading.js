import React from 'react'
// import './Loading.css'
import  style from './Loading.module.css'



const Loading = () => {

    return (
        <div className={style.center}>

            <section id={style.global}>

                <div id={style.top} className={style.mask}>
                    <div className={style.plane}></div>
                </div>
                <div id={style.middle} className={style.mask}>
                    <div className={style.plane}></div>
                </div>

                <div id={style.bottom} className={style.mask}>
                    <div className={style.plane}></div>
                </div>
<br/>
                <p className={style['center']}><i>LOADING...</i></p>

            </section>
        </div>
    )
}

export default Loading