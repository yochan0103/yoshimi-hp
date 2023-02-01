import Header from '../components/header'
import styles from './PageStyle/Menu-page.module.css';
import { client } from '../libs/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Footer from '../components/footer';
import HamburgerMenu from '../components/HamburgerMenu';

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "menu" });
    return {
      props: {
        menu: data.contents,
      },
    };
};

const Menu = ({ menu }) => {
    return (
        <>
            <Header />
            <HamburgerMenu />
            <div className={styles.ImageWrapper}>
                <img src="/IMG_04.jpg" alt='' className={styles.HeroImage} />
                <div className={styles.HeroTextWrapper}>
                    <h1 className={styles.HeroText}>マッサージメニュー</h1>
                    <p className={styles.HeroSubText}>日々の疲れ癒します</p>
                </div>
            </div>
            <div className={styles.RelaxMenuWrapper}>
                <div className={styles.BodyMenuWrapper}>
                    <div className={styles.TitleWrapper}>
                        <h1 className={styles.BodyTitle}>筋膜リリース</h1>
                    </div>
                    <Card elevation={10} sx={{ maxWidth: 500, 
                        "@media screen and (max-width:900px)":{
                            maxWidth: 400
                        }}}>
                        <CardContent>
                            <h2 className={styles.MenuSubTitle}>
                                {menu[2].summary}
                            </h2>
                            <div className={styles.MenuText}
                            dangerouslySetInnerHTML={{
                                __html: `${menu[2].MenuList}`,
                            }}
                            >
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className={styles.FacialMenuWrapper}>
                    <div className={styles.TitleWrapper}>
                        <h1 className={styles.FaceTitle}>フェイシャルケア</h1>
                    </div>
                    <Card elevation={10} sx={{ maxWidth: 500, 
                        "@media screen and (max-width:900px)":{
                            maxWidth: 400
                        }}}>
                        <CardContent>
                            <h2 className={styles.MenuSubTitle}>
                                {menu[1].summary}
                            </h2>
                            <div className={styles.MenuText}
                            dangerouslySetInnerHTML={{
                                __html: `${menu[1].MenuList}`,
                            }}
                            >
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className={styles.YogaImageWrapper}>
                <img src="/IMG_10.jpg" alt='' className={styles.YogaHeroImage} />
                <div className={styles.YogaTextWrapper}>
                    <h1 className={styles.YogaText}>ヨガメニュー</h1>
                    <p className={styles.YogaSubText}>体を動かしてリフレッシュ！！</p>
                </div>
            </div>
            <div className={styles.YogaMenuWrapper}>
                <div className={styles.TitleWrapper}>
                    <h1 className={styles.YogaTitle}>ヨガメニュー</h1>
                </div>
                <div className={styles.YogaCardWrapper}>
                    <Card elevation={10} sx={{ maxWidth: 500, 
                        "@media screen and (max-width:900px)":{
                            maxWidth: 400
                        }}}>
                            <CardContent>
                                <h2 className={styles.MenuSubTitle}>
                                    {menu[0].summary}
                                </h2>
                                <div className={styles.MenuText}
                                dangerouslySetInnerHTML={{
                                    __html: `${menu[0].MenuList}`,
                                }}
                                >
                                </div>
                            </CardContent>
                    </Card>
                </div>
            </div>
            <div className={styles.AttentionWrapper}>
                <h2 className={styles.AttentionText}>※男性の施術はご面識のある方、あるいはご紹介のある方のみ受付させていただきます。</h2>
            </div>
            <Footer />
        </>
    )
}

export default Menu