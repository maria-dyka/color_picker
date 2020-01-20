import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

import HexSelect from './HexSelect';
import RgbSelect from './RgbSelect';

const CustomInput = withStyles(theme => ({
    input: {
        width: theme.spacing(3),
        height: theme.spacing(.9),
        backgroundColor: 'white',
        padding: '0 0 0 12px',
        border: `1px solid ${theme.palette.secondary.light}`,
        '&:focus': {
            border: `1px solid ${theme.palette.secondary.dark}`,
        },
    },
  }))(InputBase);

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    colorPicker: {
        position: 'relative',
        display: 'flex',
        width: 'max-content',
        alignItems: 'center'
    },
    label: {
        fontSize: '20px',
        color: theme.palette.secondary.dark
    }
}))

const ColorPicker = props => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
        <p className={styles.label} role="heading">Choose your color: </p>
        <div className={styles.colorPicker}>
            <CustomInput value={props.value} readOnly/>
            <RgbSelect
                value={props.value}
                onChange={props.onChange}/>
            <HexSelect 
                value={props.value}
                colors={props.colors}
                onChange={props.onChange}/>
        </div>
        </div>
    )
}

export default ColorPicker;