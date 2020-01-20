import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const RegularButton = withStyles(theme => ({
    root: {
        border: 'solid 1px lightgrey',
        backgroundColor: 'lightgrey',
        color: theme.palette.secondary.dark,
        minWidth: 'fit-content',
        margin: '4px'
    },
    text: {
        paddiing: '4px !important'
    }
}))(Button);

const SubmitButton = withStyles(theme => ({
    root: {
        border: 'solid 1px #159D15',
        backgroundColor: '#159D15',
        color: 'white',
        minWidth: 'fit-content',
        margin: '4px',
        '&:focus,&:hover,&$active': {
            backgroundColor: '#48D948'
        },
    },
    text: {
        paddiing: '4px !important'
    }
}))(Button);

const CustomButton = props => {
    if (props.variant === 'regular') {
        return <RegularButton onClick={props.onClick}>{props.children}</RegularButton>
    }
    if (props.variant === 'submit') {
        return <SubmitButton onClick={props.onClick}>{props.children}</SubmitButton>
    }
}

export default CustomButton;