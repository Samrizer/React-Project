import React from 'react'
import styles from './Header.module.css'
import btnStyles from '../button/Button.module.css';
const Header = () => {
  return (
    <div className={styles.header}>

     <h3 className={styles.logo}> Aditta </h3> 
      <button className={btnStyles.btn}>Login</button>
    </div>
  )
}

export default Header
