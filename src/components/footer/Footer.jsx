import styles from './Footer.module.css'

export function Footer () {
    return (
        <footer class={styles.footer}>
            <p class={styles.footer_p}>Desarrollado por <span class={styles.artista}>Santiago Quintero</span> con <span class={styles.artista}>SolidJS</span> - © 2024 </p>
        </footer>
    )

}