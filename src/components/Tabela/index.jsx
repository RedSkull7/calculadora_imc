import styles from './Tabela.module.css';

const table = () => {
    return(
        <table className={styles.Tabela}>
            <thead>
                <tr>
                    <td className={styles.Titulo} colspan="2">Tabela IMC</td>
                </tr>
            </thead>
            <tbody>
                <tr className={styles.Subtitle}>
                    <td>IMC</td>
                    <td>Classificação</td>
                </tr>
                <tr>
                    <td>Menor que 18.5</td>
                    <td>Magro</td>
                </tr>
                <tr>
                    <td>Entre 18.5 e 25</td>
                    <td>Normal</td>
                </tr>
                <tr>
                    <td>Entre 25 e 30</td>
                    <td>Sobrepeso</td>
                </tr>
                <tr>
                    <td>Acima de 30</td>
                    <td>Obeso</td>
                </tr>
            </tbody>
        </table>
    )
}

export default table