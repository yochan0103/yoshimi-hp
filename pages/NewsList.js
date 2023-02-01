import styles from "./PageStyle/NewsList.module.css"
import  Button  from "@mui/material/Button"
import LaunchIcon from '@mui/icons-material/Launch';
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "../libs/client";
import dayjs from "dayjs";

export const ConvertTime = ({convertDate}) => {
  const ConvertedTime = dayjs(convertDate).format('YYYY.MM.DD')
  return ConvertedTime
}

const NewsList = () => {
  const [data, setData] = useState([])
  useEffect (() => {
    const getNewsData = async() => {
      const res = await client.get({
        endpoint:"news",
      });
      setData(res.contents)
    }
    getNewsData()
  }, [])
  return (
    <div className={styles.ContentsWrapper}>
        <div className={styles.ElementsWrapper}>
            <div className={styles.TitleWrapper}>
                <h2 className={styles.Title}>News</h2>
                <p className={styles.SubTitle}>お知らせ</p>
            </div>
            <ul className={styles.ListWrapper}>
              {data.slice(0,3).map((news) => (
                <Link href={`/news/${news.id}`}>
                  <div className={styles.NewsDate}>
                   <ConvertTime convertDate={news.publishedAt} />
                  </div>
                  <li key={news.id} className={styles.ListItem}>{news.title}</li>
                </Link>
              ))}  
            </ul>
        </div>
        <div className={styles.ButtonWrapper}>
          <Link href="/News-page">
            <Button variant="outlined" endIcon={<LaunchIcon />} color="success">
                More News
            </Button>
          </Link>
        </div>
    </div>
  )
}

export default NewsList