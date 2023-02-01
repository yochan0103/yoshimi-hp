import styles from "./PageStyle/AboutMe.module.css"

const AboutMe = () => {
  return (
    <>
      <div className={styles.ContentsTitleWrapper}>
          <h1 className={styles.ContentsTitle}>About Me</h1>
      </div>
      <div className={styles.ContensWrapper}>
          <div className={styles.ImgWrapper}>
            <img src="/IMG_07.jpg" alt="" className={styles.Image} />
          </div>
          <div className={styles.TextWrapper}>
              <p className={styles.Text}>
              多忙な日々の中でストレスを抱え体調を崩し生きづらさを感じていました。ヨガやボディーワーカーに出会い、ありのままの自分を受け入れることで、自分を癒せることを学ぶ。<br />
              カラダだけでなく心にもアプローチすることの大切さを知り、私と同様に悩んでる方にも伝えたいと思い、施術の方法を様々な面から学ぶ。  
              自身の体験と実感を通し、心のケアや未病を防ぐための対策と怪我をしない正常なカラダ作りのトータルサポートをお伝えできるように現在も学びを深めています。
              </p>
          </div>
      </div>
    </>
  )
}

export default AboutMe