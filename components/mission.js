import Image from "next/image"
import styles from "./style/mission.module.css";
import { IconButton } from "@mui/material";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import Link from "next/link";

const Mission = (props) => {
    const {title, subtitle_1, subtitle_2, contents_first, contents_middle, contents_final} = props;
    return (
        <div className={styles.ContentsWrapper}>
            <div className={styles.ImageWrapper}>
                <img src="/IMG_08.jpg" alt="" className={styles.Image}></img>
            </div>
            <div className={styles.DocumentWrapper}>
                <div className={styles.MissionWrapper}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.subtitle}>{subtitle_1}</p>
                    <p className={styles.subtitle}>{subtitle_2}</p>
                </div>
                <div className={styles.SentenceWrapper}>
                    <p className={styles.contents}>{contents_first}</p> <br />
                    <p className={styles.contents}>{contents_middle}</p> <br />
                    <p className={styles.contents}>{contents_final}</p>
                </div>
                <div className={styles.ToBlogWrapper}>
                    <div className={styles.ToBlogText}>Blog</div>
                    <div className={styles.ButtonIcon}>
                        <IconButton>
                            <Link href='/blog-page'>
                                <BsFillArrowRightCircleFill size={30}/>
                            </Link>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission