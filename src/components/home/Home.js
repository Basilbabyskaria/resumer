import React from 'react'
import styles from './Home.module.css'
import image from '../assets/interviewSVG.svg'
import { useNavigate } from 'react-router'
function Home() {
  const routTo=useNavigate()
  return (
    <div className={styles.row}>
      <div className={styles.col1} >
      <img src={image} alt="" className={styles.img} />
      </div>
      <div className={styles.col2} >
        <h1 className={styles.title}>Resumer the one and only truley free resume builder</h1>
        <button className={styles.btn} onClick={()=>routTo("builder")}>Create yours today</button>
      </div>

    </div>
  )
}

export default Home