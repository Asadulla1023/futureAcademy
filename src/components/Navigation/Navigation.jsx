import React, { useState } from 'react'

import { Link } from 'react-router-dom'


import styles from './Navigation.module.css'

const Navigation = () => {
  // const [modalOpen, setOpenModal] = useState(false)
  const [nav, setNav] = useState(false)

  const changeBgHandler = () => {
    if (window.scrollY >= 14.41) {
      setNav(true)
    }
    else {
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeBgHandler)



  const [rotate, setRotate] = useState(false)

  rotate ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

  const modalOpenHandler = () => {
    setRotate(!rotate)
  }

  return (
    <div className={nav ? styles.navbarContentActive : styles.navbarContent}>
      <ul className={styles.navbarUl}>
        <li className={styles.navbarLi}><Link className={styles.navigators} to="/"><img src="https://www.freeiconspng.com/thumbs/education-png/education-png-10.png" width="140px" alt="" className={styles.logoImg} /><p>FUTURE ACADEMY</p></Link></li>
        <li><Link className={styles.navigators} to="/course">Все курсы</Link></li>
        <li><Link className={styles.navigators} to="/events">Мероприятия</Link></li>
        <li><Link className={styles.navigators} to="/base">Базы знаний</Link></li>
        <li><Link className={styles.navigators} to="/career">Карьера</Link></li>
        <li className={styles.regionSelector}><button onClick={
          modalOpenHandler
        } className={styles.searchRegion} type='button'>Your direction</button>
        </li>
      </ul>
    </div>
  )
}

export default Navigation