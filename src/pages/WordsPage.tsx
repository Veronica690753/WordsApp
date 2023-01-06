import BannerGlossary from "../components/Images/BannerGlossary/BannerGlossary"
import styles from "../assets/css/words.module.css"


export const WordsPage = () => {
  return (
    <div style={{ backgroundColor: "#F8FAFC" }}>
    <div className={styles.containerGlossary}>
        <BannerGlossary/>
    </div>

  </div>
  )
}
