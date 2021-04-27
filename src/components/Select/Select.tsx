import React from 'react';

// styles
import { Wrapper } from './Select.styles'


// types
import { Cities } from '../../Cities'

type Props = {
    value: string;
    callback: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<Props> = ({ value, callback }) => {
    return (
        <Wrapper>
            <label htmlFor={`city-name`}>City:</label>
            <select name={`city-name`} id={`city-name`} value={value} onChange={callback}>
                {Cities.map((city, index) => (
                    <option key={index} value={city.name}>{ city.name }</option>
                ))}
            </select>
        </Wrapper>
    );
}

export default Select;