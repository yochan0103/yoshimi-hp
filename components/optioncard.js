import { Card } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./style/optioncard.module.css"

const Optioncard = (props) => {
  const {src, alt, title, fee} = props;
  return (
    <>
        <Card elevation={10} sx={{ maxWidth:600 }}>
                <div className={styles.OptionElementWrapper}>
                    <img src={src} alt={alt} className={styles.ImageElement} />
                    <div className={styles.OptionTextWrapper}>
                        <h2 className={styles.OptionName}>{title}</h2>
                        <p className={styles.OptionFee}>{fee}</p>
                    </div>
                </div>
        </Card>
    </>
  )
}

export default Optioncard