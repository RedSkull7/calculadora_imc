import { useState } from 'react';
import styles from './Formulario.module.css';

function Formulario () {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState('');
    const [classifica, setClassifica] = useState('');

    const calculaImc = () => {
        const valor1 = parseFloat(altura) / 100 ;
        const valor2 = parseFloat(peso);

        if (valor1 > 0 && valor2 > 0) {
            const imc = valor2 / (valor1 * valor1);
            setResultado(`${imc.toFixed(2)}`);

        if( imc < 18.5 ) {
            setClassifica('Magro');
        } else if ( imc >= 18.5 && imc < 25 ) {
            setClassifica('Normal');
        } else if ( imc >= 25 && imc < 30) {
            setClassifica('Sobrepeso');
        } else {
            setClassifica('Obeso')
        }
        }
    }

    return(
        <div className={styles.campos}>
            <input className={styles.campoInput} type="number" placeholder="Insira aqui sua altura (cm)" value={altura} onChange={e => setAltura(e.target.value)}/>
            <input className={styles.campoInput} type="number" placeholder="Insira aqui o seu peso (g)" value={peso} onChange={e => setPeso(e.target.value)}/>
            <button className={styles.button} type="button" onClick={calculaImc} >Clique para calcular</button>
            <p>{`Seu IMC é de ${resultado} e você está classificado como ${classifica}.`}</p>
        </div>
    )
}

export default Formulario