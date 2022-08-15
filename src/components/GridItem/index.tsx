import { level } from "../../helpers/imc";
import style from './GridItem.module.css';

import upImage from '../../assets/img/up.png';
import downImage from '../../assets/img/down.png';

type Props = {
    item: level
};

export const GridItem = ({ item }: Props) => {
    return(
        <div className={style.main} style={{ backgroundColor: item.color }}>
            <div className={style.gridIcon}>
                {/* AQUI TEMOS DOIS MODOS E EXIBIR OS ICONES */}

                {/* {item.icon == 'up' && <img src={upImage} alt="" width="30" />}
                {item.icon == 'down' && <img src={downImage} alt="" width="30" />} */}

                <img  src={item.icon == 'up' ? upImage : downImage} alt="" width="30" />
            </div>
            <div className={style.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className={style.yourImc}>Seu IMC é de {item.yourImc} kg/m2</div>
            }

            <div className={style.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}