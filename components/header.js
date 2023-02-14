import styles from '../components/style/header.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <div className={styles.HeaderWrapper}>
            <nav className={styles.Nav}>
                <div></div>
                <ul className={styles.MenuWrapper}>
                    <li className={styles.ListItem}>
                        <Link href='/'> 
                            Home
                        </Link>
                    </li>
                    <li className={styles.ListItem}>
                        <Link href='/menu-page'>
                            Menu
                        </Link>
                    </li>
                    <li className={styles.ListItem}>
                        <Link href='/blog-page'>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header