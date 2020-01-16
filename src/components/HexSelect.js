import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const HexSelect = props => {
    return (
        <FormControl>
            <Select
                value={props.value}
                onChange={e => props.onChange(e.target.value)}>
                {props.colors.map(color => 
                    <MenuItem 
                        key={color}
                        value={color}>{color}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default HexSelect;