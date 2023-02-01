import styles from "./style/Contact.module.css";
import { FaLine } from "react-icons/fa"
import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.ContentsWrapper}>
        <div className={styles.TitleWrapper}>
            <h1 className={styles.Title}>お問合せ</h1>
        </div>
        <div className={styles.TextWrapper}>
            <p className={styles.Text}>お困りごと、予約等は公式LINEよりお問合せください。</p> <br />
            <div className={styles.ImageWrapper}>
              <Link href='https://line.me/R/ti/p/@939didbq'>
                <FaLine size={80} color={'#5AFF19'} />
              </Link>
            </div>
            <p className={styles.Attention}>※LINEアイコンを押していただくと起動いたします。</p>
        </div>
    </div>
  )
}

export default Contact