import { client } from '../../libs/client';
import dayjs from 'dayjs';
import styles from './[id].module.css'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { FiArrowLeftCircle } from 'react-icons/fi'
import HamburgerNewsMenu from '../../components/HamburgerNewsMenu'

export const ConvertTime = ({convertDate}) => {
  const ConvertedTime = dayjs(convertDate).format('YYYY.MM.DD')
  return ConvertedTime
}

const BlogId = ({ blogs }) => {
  return (
    <>
      <HamburgerNewsMenu />
      <div className={styles.PrevWrapper}>
        <a href='/' className={styles.PrevHome}>Home</a>
        <a className={styles.MiddleIcon}>&gt;</a>
        <a href='/blog-page' className={styles.PrevBlog}>Blog</a>
        <a className={styles.MiddleIcon}>&gt;</a>
        <a className={styles.RecentBlog}>{blogs.title}</a>
      </div>
      <div className={styles.ResponsePrevWrapper}>
        <Link href='/BlogList'>
          <FiArrowLeftCircle size={30}/>
          <a className={styles.ResponsePrevText}>一覧に戻る</a>
        </Link>
      </div>
      <div className={styles.ContentsWrapper}>
          <div className={styles.PublishedTime}>
            <ConvertTime convertDate={blogs.publishedAt} />
          </div>
          <h1 className={styles.Title} >{blogs.title}</h1>
          <div className={styles.Contents}
            dangerouslySetInnerHTML={{
              __html: `${blogs.content}`,
            }}
          />
      </div>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  // console.log(data)

  return {
    props: {
      blogs: data,
    },
  };
};

export default BlogId