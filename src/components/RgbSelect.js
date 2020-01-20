import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { convertHexToRGB, convertRGBtoHex } from '../utils';
import CustomListItem from './CustomListItem';
import CustomButton from './CustomButton';
import CustomRGBSlider from './CustomRGBSlider';

const useStyles = makeStyles(theme => ({
    colorWrapper: {
        cursor: 'pointer',
        width: 'fit-content',
        border: `1px solid ${theme.palette.secondary.light}`,
        outline: 0,
        '&:focus': {
            border: `1px solid ${theme.palette.secondary.dark}`
        },
    },
    colorPreview: {
        width: theme.spacing(.51),
        height: theme.spacing(.4),
        margin: theme.spacing(.25),
    },
    dropdown: {
        position: 'absolute',
        top: theme.spacing(1) + 1,
        right: 0,
    },
    menu: {
        width: 200,
        padding: '20px'
    },
    arrow: {
        width: theme.spacing(.51),
        height: theme.spacing(.25),
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        position: 'relative',
        left: 200 - theme.spacing(1),
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}))

const RgbSelect = props => {
    const [rgbValues, setRGBvales] = useState({});
    const [openedMenu, setOpenedMenu] = useState(false);

    const styles = useStyles();

    useEffect(() => {
        const rgbColor = convertHexToRGB(props.value);
        setRGBvales(rgbColor);
    }, [props.value])

    const changeColorHandler = useCallback((newValue, color) => {
        switch (color) {
            case 'r': 
                setRGBvales(prevRGB => ({...prevRGB, r: newValue}));
                break;
            case 'g':
                setRGBvales(prevRGB => ({...prevRGB, g: newValue}));
                break;
            case 'b':
                setRGBvales(prevRGB => ({...prevRGB, b: newValue}));
                break;
            default:
                setRGBvales(prevRGB => ({...prevRGB}))
        }
    }, [setRGBvales])

    const cancelHandler = useCallback(() => {
        const rgbColor = convertHexToRGB(props.value);
        setOpenedMenu(false);
        setRGBvales(rgbColor);
    }, [props.value])

    const submitHandler = useCallback(() => {
        const hexColor = convertRGBtoHex(rgbValues);
        setOpenedMenu(false);
        props.onChange(hexColor);
    }, [props, rgbValues])

    return (
        <div className={styles.wrapper}>
            <Paper 
                className={styles.colorWrapper}
                variant="outlined"
                square
                role="button"
                aria-haspopup="listbox"
                tabIndex="0"
                onKeyPress={e => e.key === 'Enter'? setOpenedMenu(prev => !prev): null}
                onClick={() => setOpenedMenu(prev => !prev)}>
                <Paper
                    elevation={0}
                    square
                    className={styles.colorPreview}
                    style={{backgroundColor: `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`}}/>
            </Paper>
            {openedMenu ? (
                <ClickAwayListener onClickAway={cancelHandler}>
                    <div className={styles.dropdown}>
                        <Paper elevation={5} className={styles.arrow}></Paper>
                        <Paper elevation={5} className={styles.menu}>
                            <CustomListItem label="R">
                                <CustomRGBSlider
                                    variant="red"
                                    value={rgbValues.r}
                                    onChange={changeColorHandler}/>
                            </CustomListItem>
                            <CustomListItem label="G">
                                <CustomRGBSlider
                                    variant="green"
                                    value={rgbValues.g}
                                    onChange={changeColorHandler}/>
                            </CustomListItem>
                            <CustomListItem label="B">
                                <CustomRGBSlider
                                    variant="blue"
                                    value={rgbValues.b}
                                    onChange={changeColorHandler}/>
                            </CustomListItem>
                            <div className={styles.buttonsContainer}>
                                <CustomButton variant="regular" onClick={cancelHandler}>Cancel</CustomButton>
                                <CustomButton variant="submit" onClick={submitHandler}>OK</CustomButton>
                            </div>
                        </Paper>
                    </div>
                </ClickAwayListener>
            ): null}
        </div>
    )
}

export default RgbSelect;