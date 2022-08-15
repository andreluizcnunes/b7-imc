import { useState } from 'react';
import Style from './App.module.css';
import { GridItem } from './components/GridItem';
import leftArrowImage from './assets/img/leftarrow.png';

import powerImage from './assets/img/powered.png';

import { levels, calculateImc, level } from './helpers/imc';

const App = () => {
  const [heightField, setHeightFild] = useState<number>(0);
  const [weightField, setWeightFild] = useState<number>(0);
  const [toShow, setToShow] = useState<level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert('Digite todos os campos');
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightFild(0);
    setWeightFild(0);
  }

  return (
    <div className={Style.main}>
      <header>
        <div className={Style.headerContainer}>
          <img src={powerImage} alt="" width={150} />
        </div>
      </header>

      <div className={Style.container}>
        <div className={Style.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde oara calcular o pelo ideal de cada
            pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightFild(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 85.5 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightFild(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button 
            onClick={handleCalculateButton} 
            disabled={toShow ? true : false}
          >Calcular</button>
        </div>
        <div className={Style.rightSide}>
          {!toShow && (
            <div className={Style.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={Style.rightBig}>
              <div className={Style.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
