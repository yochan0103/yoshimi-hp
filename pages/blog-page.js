import Header from "../components/header"
import HamburgerMenu from '../components/HamburgerMenu'
import styles from './PageStyle/blog-page.module.css'
import { client } from '../libs/client'
import { Card } from "@mui/material";
import dayjs from 'dayjs';
import { CardActionArea } from '@mui/material'
import Link from "next/link";
import Footer from "../components/footer";
import  Button  from "@mui/material/Button"
import LaunchIcon from '@mui/icons-material/Launch';

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "blogs" });
    return {
      props: {
        blogs: data.contents,
      },
    };
};

export const ConvertTime = ({convertDate}) => {
    const ConvertedTime = dayjs(convertDate).format('YYYY-MM-DD')
    return ConvertedTime
}

const BlogPage = ({blogs}) => {
    return (
        <>
            <Header />
            <HamburgerMenu />
            <div className={styles.ContentsWrapper}>
                <div className={styles.BlogContentsWrapper}>
                    <div className={styles.BlogTitleWrapper}>
                        <h2 className={styles.BlogPageTitle}>Blog</h2>
                        <p className={styles.BlogPageSubTitle}>日々の記録をつづります</p>
                    </div>
                    <div className={styles.BlogElementsWrapper}>
                        <ul className={styles.BlogListWrapper}>
                            {blogs.slice(0,6).map((blog) => (
                                <li key={blog.id} className={styles.BlogElements}>
                                    <Card justify="center" elevation={10} sx={{ maxWidth:300, display:'flex' }}>
                                        <CardActionArea>
                                            <Link href={`/blog/${blog.id}`}>
                                                <img src={blog.eyecatch.url} alt="" className={styles.ImageWrapper} />
                                            </Link>
                                            <div className={styles.BlogDate}>
                                                <ConvertTime convertDate={blog.publishedAt} className={styles.PublishedTime} />
                                            </div>
                                            <h2 className={styles.BlogTitle}>{blog.title}</h2>
                                        </CardActionArea>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.ToBlogListWrapper}>
                    <Link href='/BlogList'>
                        <Button variant="outlined" endIcon={<LaunchIcon />} color="success" size="large">
                            一覧はこちら！
                        </Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogPage