import Header from '../components/header'
import HamburgerMenu from "../components/HamburgerMenu"
import { client } from '.././libs/client'
import styles from './PageStyle/News-page.module.css'
import dayjs from "dayjs";
import Link from 'next/link';
import { useEffect, useState } from "react";
import Contact from '../components/Contact'
import Footer from '../components/footer'
 
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "news" });
  return {
    props: {
      newses: data.contents,
    },
  };
};

export const ConvertTime = ({convertDate}) => {
  const ConvertedTime = dayjs(convertDate).format('YYYY.MM.DD')
  return ConvertedTime
}

const NewsPage = ({newses}) => {
  return (
    <>
      <Header />
      <HamburgerMenu />
      <div className={styles.PrevWrapper}>
        <a href='/' className={styles.PrevHome}>Home</a>
        <a className={styles.MiddleIcon}>&gt;</a>
        <a className={styles.PrevNews}>News</a>
      </div>
      <div className={styles.ContentsWrapper}>
        <div className={styles.NewsContentsTitle}>
          <h1 className={styles.Title}>News</h1>
          <h2 className={styles.NewsSubTitle}>お知らせ</h2>
        </div>
        <ul className={styles.NewsElementWrapper}>
          {newses.map((news) => (
            <Link href={`/news/${news.id}`}>
              <div className={styles.NewsDate}>
                <ConvertTime convertDate={news.publishedAt} />
              </div>
              <li key={news.id} className={styles.NewsElememts}>{news.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default NewsPage