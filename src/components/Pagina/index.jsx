import styles from './Pagina.module.css';

const Layout = () => {
    return(
        <header className={styles.headerContainer}>
            <h1 className={styles.title}>Calculadora de IMC</h1>
        </header>
    )
}

export default Layout