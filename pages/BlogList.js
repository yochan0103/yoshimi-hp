import { client } from '../libs/client'
import Header from '../components/header'
import styles from './PageStyle/BlogList.module.css'
import dayjs from 'dayjs';
import Link from 'next/link';
import Footer from '../components/footer';
import HamburgerMenu from '../components/HamburgerMenu';

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "blogs" });
    return {
      props: {
        blogs: data.contents,
      },
    };
};
  
export const ConvertTime = ({convertDate}) => {
const ConvertedTime = dayjs(convertDate).format('YYYY.MM.DD')
return ConvertedTime
}

const BlogList = ({blogs}) => {
  return (
    <>
        <Header />
        <HamburgerMenu />
        <div className={styles.PrevWrapper}>
            <Link href='/'>
                <p className={styles.PrevHome}>Home</p>
            </Link>
            <p className={styles.MiddleIcon}>&gt;</p>
            <Link href='/blog-page'>
                <p className={styles.PrevBlog}>Blog</p>
            </Link>
        </div>
        <div className={styles.ContentsWrapper}>
            <div className={styles.BlogContentsTitle}>
                <h1 className={styles.Title}>Blog</h1>
                <p className={styles.SubTitle}>全てのBlogを掲示しています。</p>
            </div>
            <ul className={styles.BlogElementWrapper}>
                {blogs.map((blog) => (
                    <Link href={`/blog/${blog.id}`} key={blog.id}>
                        <li key={blog.id} className={styles.BlogContentsWrapper}>
                            <div className={styles.BlogListWrapper}>
                                <img src={blog.eyecatch.url} alt="" className={styles.ImageWrapper} />
                                <div className={styles.BlogTextWraper}>
                                    <div className={styles.BlogDate}>
                                        <ConvertTime convertDate={blog.publishedAt} />
                                    </div>
                                    <div className={styles.BlogTitle}>{blog.title}</div>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
        <Footer />
    </>
  )
}

export default BlogList