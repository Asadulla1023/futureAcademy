import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import logoImg from './images/logoNavigate.png'
import whiteLogo from './images/logoNavigateWh.png'
import select from './images/select.png'
import selectWh from './images/selectWh.png'
import user from './images/user.png'
import location from './images/location.png'
import locBlack from './images/locBlack.png'
import userWh from './images/userWh.png'

import styles from './Navigation.module.css'

const Navigation = () => {
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

  return (
    <div className={nav ? styles.navbarContentActive : styles.navbarContent}>
      <div className={styles.container}>
        <div className={styles.navbarLogo}>
          <Link className={styles.navigators} to="/">
            <img src={!nav ? logoImg : whiteLogo} alt="imgLogo" className={styles.logoImg} />
          </Link>
        </div>
        <ul className={styles.navbarUl}>
          <li className={styles.courses}><Link className={!nav ? styles.navigators : styles.navigatorsWh} to="/course"><img src={!nav ? select : selectWh} alt={!nav ? select : selectWh} />Все курсы</Link></li>
          <li><Link className={!nav ? styles.navigators : styles.navigatorsWh} to="/events">Мероприятия</Link></li>
          <li><Link className={!nav ? styles.navigators : styles.navigatorsWh} to="/base">Базы знаний</Link></li>
          <li><Link className={!nav ? styles.navigators : styles.navigatorsWh} to="/career">Карьера</Link></li>
        </ul>
        <div className={styles.contact}>
          <ul className={styles.contactUl}>
            <li className={!nav ? styles.contactLi : styles.contactLiWh}><img src={nav ? location: locBlack} alt={location} /><select>
                <option value="Нижний Новгород">Нижний Новгород</option>
                <option value="Нижний Новгород">Нижний Новгород</option>
              </select></li>
            <li className={!nav ? styles.contactLi : styles.contactLiWh}><a href="tel: 8 800 950-33-98">8 800 950-33-98</a></li>
          </ul>
        </div>
        <div className={styles.authPageSel}><Link to='/auth' className={!nav ? styles.authPage : styles.authPageWh} type='button'><img src={!nav ? user : userWh} alt={user} /> Войти</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation