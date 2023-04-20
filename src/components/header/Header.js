import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { FaBars } from "react-icons/fa";
function Header() {
  return (
    <div className={styles.nav}>
        <h1 className={styles.h1}><b className={styles.b}>R</b>esumer</h1>
        <ul className={styles.ul}>
          <li className={styles.li} ><Link className={styles.link} to="/">Home</Link></li>
          <li className={styles.li} ><Link className={styles.link} to="builder">Builder</Link></li>
          <li className={styles.li} ><Link className={styles.link} to="about">About</Link></li>
          <input type="checkbox" id='check' className={styles.check}/>
        <label htmlFor="check" className={styles.label}><FaBars/></label>
        </ul>
        
    </div>
  )
}

export default Header