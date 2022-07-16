import Link from "next/link";
import styles from '../../styles/A.module.css'
export default function A({text, path}) {
    return (
        <Link href={path}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}
