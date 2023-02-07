import React from 'react'
import Header from '../components/header'
import HamburgerMenu from '../components/HamburgerMenu'
import styles from './PageStyle/option-page.module.css'
import Link from 'next/link'
import Optioncard from '../components/optioncard'
import Footer from '../components/footer'

const OptionPage = () => {
  return (
    <>
        <Header />
        <HamburgerMenu />
        <div className={styles.PrevWrapper}>
            <Link href='/'>
                <p className={styles.PrevHome}>Home</p>
            </Link>
            <p className={styles.MiddleIcon}>&gt;</p>
            <Link href='/menu-page'>
                <p className={styles.PrevMenu}>Menu</p>
            </Link>
        </div>
        <div className={styles.ContentsWrapper}>
            <div className={styles.OptionTextWrapper}>
                <h1 className={styles.OptionText}>オプション<br />メニュー</h1>
            </div>
            <ul className={styles.OptionMenuWrapper}>
                <li className={styles.OptionElement}>
                    <Link href="/OvertoneHealing">
                        <Optioncard src="/IMG_10.jpg" alt="倍音ヒーリング" title="倍音ヒーリング" fee="3,000円" />
                    </Link>
                </li>
            </ul>
        </div>
        <Footer />
    </>
  )
}

export default OptionPage