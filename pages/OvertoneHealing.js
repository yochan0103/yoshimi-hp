import OptionElememt from "../components/OptionElememt"
import Header from "../components/header"
import HamburgerMenu from "../components/HamburgerMenu"
import Footer from "../components/footer"

const OvertoneHealing = () => {
  return (
    <>
        <Header />
        <HamburgerMenu />
        <OptionElememt 
            img="/IMG_10.jpg" 
            alt="倍音ヒーリング" 
            option="/option-page"
            title="シンキング・リン"
            sentence="
            シンギングボールと、日本古来の仏教音具であるリンの叡智が出会って生まれた、新しい音響楽器です。
            その音は、体に倍音として驚くほど力強く響きます。
            右脳と左脳のバランスが整い、落ち着いた状態を取り戻し、人が本来持っている力が高まり、安らぎで満たされます
            また、すぐに瞑想状態に入る手助けをし、集中力をアップさせ、創造性や想像力の活性化を促します
            こちらはオプンションとなります
            施術やヨガと組み合わせてお使いください。"
        />
        <Footer />
    </>
  )
}

export default OvertoneHealing