import React from 'react';

import HexSelect from './HexSelect';
import RgbSelect from './RgbSelect';

const ColorPicker = props => {
    return (
        <>
        <HexSelect 
            value={props.value}
            colors={props.colors}
            onChange={props.onChange}/>
        <RgbSelect 
            value={props.value}
            onChange={props.onChange}/>
        </>
    )
}

export default ColorPicker;