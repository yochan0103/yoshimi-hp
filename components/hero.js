import Image from 'next/image';
import Slick from 'react-slick';
import styles from "./style/hero.module.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const setting = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        fade:true,
        autoplay:true,
        autoplaySpeed: 5000,
        arrows:false,
    }
  return (
    <div className={styles.ContentsWrapper}>
        <ul className={styles.SlideWrapper}>
            <Slick {...setting}>
                <li className={styles.SlideItem}>
                    <img src="/IMG_09.jpg" alt="" className={styles.Image}/>
                    <div className={styles.TextWrapper}>
                        <h1 className={styles.TitleText}>yuj yoga&bodymakeup</h1>
                        <p className={styles.ContentsText}>私を導くのは自分自身</p> <br />
                        <p className={styles.ContentsText}>健やかに自由で美しく〜Vital Life〜</p>
                    </div>
                </li>
                <li className={styles.SlideItem}>
                    <img src="IMG_03.jpg" alt="" className={styles.Image}/>
                    <div className={styles.TextWrapper}>
                        <h1 className={styles.TitleText}>Session</h1>
                        <p className={styles.ContentsText}>自分と向き合う　極上の癒し時間</p>
                    </div>
                </li>
                <li className={styles.SlideItem}>
                    <img src="/IMG_10.jpg" alt="" className={styles.Image}/>
                    <div className={styles.TextWrapper}>
                        <h1 className={styles.TitleText}>Shinging Ring</h1>
                        <p className={styles.ContentsText}>倍音ヒーリング</p>
                    </div>
                </li>
            </Slick>
        </ul>
    </div>
  )
}

export default Hero