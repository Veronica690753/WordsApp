import { HomePage } from '../../pages/HomePage'
import styles from './Links.module.css'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div className={styles.containerLinks}>
        <div className={styles.containerTitle}>
           <Link className={styles.link} to='/'>Home</Link>
        </div>
        <div className={styles.containerTitle}>
        <Link className={styles.link} to='/users'>Users</Link>
        </div>
        <div className={styles.containerTitle}>
        <Link className={styles.link} to='/words'>Glossary</Link>
        </div>
        <div className={styles.containerTitle}>
        <Link className={styles.link} to='/logs'>Logs</Link>
        </div>
    </div>
  )
}

export default Links