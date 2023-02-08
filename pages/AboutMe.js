import styles from "./PageStyle/AboutMe.module.css"

const AboutMe = () => {
  return (
    <>
      <div className={styles.ContentsTitleWrapper}>
          <h1 className={styles.ContentsTitle}>About Me</h1>
      </div>
      <div className={styles.ContensWrapper}>
          <div className={styles.ImgWrapper}>
            <img src="/IMG_06.jpg" alt="" className={styles.Image} />
          </div>
          <div className={styles.TextWrapper}>
              <h2 className={styles.Title}>セラピスト よしみ</h2>
              <h1 className={styles.Consept}>私を導くのは私自身<br />健やかに自由で美しく</h1>
              <p className={styles.Text}>
              多忙な日々の中でストレスを抱え体調を崩し生きづらさを感じていました。
              ありのままの自分を受け入れることで、自分自信を癒せること知る。
              カラダだけでなく心にもアプローチすることの大切さを知り、私と同様に悩んでる方にも伝えたいと思いケアの仕方を様々な方面から取り入れ学ぶ。<br />
              自身の体験と実感を通し、疲れた心のケアや未病を防ぐための対策と怪我をしない正常なカラダ作りのトータルサポートのお手伝いをさせていただきます。
              </p>
          </div>
      </div>
    </>
  )
}

export default AboutMe