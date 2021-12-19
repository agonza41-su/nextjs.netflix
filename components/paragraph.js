import styles from './paragraph.module.scss'

const Paragraph = ({children}) => {
    return <p className={styles.Paragraph}>{children}</p>
}
export default Paragraph