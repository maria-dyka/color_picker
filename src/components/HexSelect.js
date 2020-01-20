import React, { useCallback, useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
 
const DropdownButton = withStyles(theme => ({
    root: {
        minWidth: theme.spacing(1),
        height: theme.spacing(.93),
        padding: 0,
        border: `1px solid ${theme.palette.secondary.light}`,
        backgroundColor: 'white',
        borderRadius: 0,
       '&:focus,&:active': {
           border: `1px solid ${theme.palette.secondary.dark}`,
           backgroundColor: 'white',
        },
        '&:hover': {
            backgroundColor: 'white'
        }
    },
    label: {
        color: theme.palette.secondary.main
    }
 }))(Button);
 
const useStyles = makeStyles(theme => ({
    colorPreview: {
       width: theme.spacing(.51),
       height: theme.spacing(.4),
       marginRight: theme.spacing(.5)
    },
    dropdown: {
        position: 'absolute',
        top: theme.spacing(1) + 1,
        right: 0,
    },
    menu: {
        width: 200,
        padding: '10px 0 10px 0'
    },
    arrow: {
        width: theme.spacing(.51),
        height: theme.spacing(.25),
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        position: 'relative',
        left: 200 - theme.spacing(.75),
    },
    opened: {
        transform: 'rotate(180deg)'
    }
}))
 
const HexSelect = props => {
    const [openedMenu, setOpenedMenu] = useState(false);
    const styles = useStyles();

    const onItemCkickHandler = useCallback(e => {
        const color = e.currentTarget.dataset.key;
        setOpenedMenu(prev => !prev);
        props.onChange(color);
    },[props]);

    const toggleMenu = useCallback(() => setOpenedMenu(prev => !prev), [setOpenedMenu]);
 
    return (
        <FormControl className={styles.wrapper}>
            <DropdownButton disableRipple={true} onClick={toggleMenu}>
                <ArrowDropDownIcon className={openedMenu? styles.opened: ''}/>
            </DropdownButton>
            {openedMenu ? (
                <ClickAwayListener onClickAway={toggleMenu}>
                    <div className={styles.dropdown}>
                        <Paper elevation={5} className={styles.arrow}></Paper>
                        <Paper elevation={5} className={styles.menu}>
                            {props.colors.map(color =>
                                <MenuItem
                                    key={color}
                                    data-key={color}
                                    selected={color === props.value}
                                    onClick={onItemCkickHandler}>
                                        <div className={styles.colorPreview} style={{backgroundColor: color}}></div>
                                        <span>{color}</span>
                                </MenuItem>)}
                        </Paper>
                    </div>
                </ClickAwayListener>
            ): null}
        </FormControl>
    )
}
 
export default HexSelect;