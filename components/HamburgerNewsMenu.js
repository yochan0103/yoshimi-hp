import Link from "next/link"
import { useState } from "react"
import { CgMenu } from 'react-icons/cg'
import { CgCloseR } from 'react-icons/cg'
import styles from "./style/HamburgerMenu.module.css"

const HamburgerNewsMenu = () => {
  const [ openMenu, setOpenMenu ] = useState(false);
  const OpenFunction = () => {
    setOpenMenu(!openMenu);  
  }
  const CloseFunction = () => {
    setOpenMenu(openMenu);  
  }  
  return (
    <div className={styles.HamburgerWrapper}>
        <div className={styles.NavLocation}>
            {openMenu ? <CgCloseR className={styles.HamburgerIcon} 
                        size='40px' 
                        color='black'
                        onClick={() => OpenFunction()}
                        /> : 
                        <CgMenu className={styles.HamburgerIcon} 
                        size='40px' 
                        color='black'
                        onClick={() => OpenFunction()}
                        />
            }
            <div className={styles.title}>
                <Link href='/'>
                    yuj
                </Link>
            </div>
        </div>
        <nav className={styles.HamburgerNav}>
            {openMenu && <ul className={styles.MenuWrapper}>
                    <li className={styles.ListItem} onClick={OpenFunction}>
                        <Link href='/'> 
                            Home
                        </Link>
                    </li>
                    <li className={styles.ListItem} onClick={OpenFunction}>
                        <Link href='/menu-page'>
                            Menu
                        </Link>
                    </li>
                    <li className={styles.ListItem} onClick={OpenFunction}>
                        <Link href='/blog-page'>
                            Blog
                        </Link>
                    </li>
                </ul>
            }
        </nav>
    </div>
  )
}

export default HamburgerNewsMenu