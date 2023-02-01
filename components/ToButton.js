import { Button } from "@mui/material"
import styles from "./style/ToButton.module.css"
import { createTheme } from "@mui/material/styles"
import Link from "next/link"

const ToButton = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main:'#fce4ec',
            }
        }
    })
  return (
    <div className={styles.ButtonWrapper}>
        <Button 
            variant="contained" 
            size="large" 
            theme={theme}  
            sx={{
                borderRadius:'30px',
                width:"20vw", 
                fontSize:"1.5rem",
                "@media screen and (max-width:900px)":{
                    fontSize:"1rem",
                    width:"40vw",
                },
            }}
        >
            <Link href="/menu-page">
                メニュー
            </Link>
        </Button>
    </div>
  )
}

export default ToButton