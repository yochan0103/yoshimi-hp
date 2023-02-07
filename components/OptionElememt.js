import styles from './style/OptionElement.module.css'
import Link from 'next/link';
import { FiArrowLeftCircle } from 'react-icons/fi'

const OptionElememt = (props) => {
  const {img, alt, option ,title, sentence} = props;
  return (
    <>
        <div className={styles.PrevWrapper}>
            <Link href='/'>
                <p className={styles.PrevHome}>Home</p>
            </Link>
                <p className={styles.MiddleIcon}>&gt;</p>
            <Link href='/menu-page'>
                <p className={styles.PrevMenu}>Menu</p>
            </Link>
            <p className={styles.MiddleIcon}>&gt;</p>
            <Link href={option}>
                <p className={styles.OptionName}>オプション</p>
            </Link>
        </div>
        <div className={styles.ResponsePrevWrapper}>
            <Link href={option}>
                <FiArrowLeftCircle size={30}/>
                <p className={styles.ResponsePrevText}>オプションに戻る</p>
            </Link>
        </div>
        <div className={styles.ContentsWrapper}>
            <div className={styles.ImageWrapper}>
                <img src={img} alt={alt} className={styles.ImageElement} />
                <div className={styles.TitleWrapper}>
                    <h1 className={styles.Title}>{title}</h1>
                </div>
            </div>
            <div className={styles.TextWrapper}>
                <p className={styles.Sentence}>{sentence}</p>
            </div>
        </div>
    </>
  )
}

export default OptionElememt