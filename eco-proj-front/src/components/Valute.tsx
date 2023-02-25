import { FC } from 'react';

import {valuteType} from '../utils/types';

interface valuteProps {
    valute: valuteType;
}

const Valute: FC<valuteProps> = ({valute}) => {

    return (
        <>
            {/* -1 * ( 1 - value / previousValue), если прошлое значение меньше настоящего, то результатом выйдет
            положительное значение (рост валюты) и наоборот */}
            <h3>{valute.CharCode}: {valute.Value.toFixed(2)}₽
                <span style={-(1 - (valute.Value / valute.Previous)) < 0 ? { color: '#ff1753' } : { color: '#17ff67' }}>
                    ({-(1 - (valute.Value / valute.Previous)).toFixed(4)}%)
                </span>
            </h3>
        </>
    );
};

export default Valute;