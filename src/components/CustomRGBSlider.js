import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const RedSlider = withStyles({
    thumb: {
        color: '#DF4D34',
        '&:focus,&:hover,&$active': {
          boxShadow: '#FFC4BA 0px 0px 1px 4px',
        },
    },
    rail: {
        background: 'linear-gradient(45deg, #E05D47 0%, #AF311B 50%, #380901 100%)',
        opacity: 1,
        height: 3,
        borderRadius: 2,
    }
})(Slider);

const GreenSlider = withStyles({
    thumb: {
        color: '#27CD32',
        '&:focus,&:hover,&$active': {
          boxShadow: '#A9E5AD 0px 0px 1px 4px',
        },
    },
    rail: {
        background: 'linear-gradient(45deg, #31CA3C 0%, #12921C 50%, #054009 100%)',
        opacity: 1,
        height: 3,
        borderRadius: 2,
    }
})(Slider);

const BlueSlider = withStyles({
    thumb: {
        color: '#3088CA',
        '&:focus,&:hover,&$active': {
          boxShadow: '#ACD5F3 0px 0px 1px 4px',
        },
    },
    rail: {
        background: 'linear-gradient(45deg, #3E93D2 0%, #1B5F92 50%, #042C4A 100%)',
        opacity: 1,
        height: 3,
        borderRadius: 2,
    }
})(Slider);

const CustomRGBSlider = props => {
    switch (props.variant) {
        case 'red' :
            return <RedSlider
                defaultValue={props.value}
                onChange={(e, newValue) => props.onChange(newValue, 'r')}
                track={false}
                valueLabelDisplay="auto"
                aria-label="red slider"
                step={1} 
                min={0} 
                max={255}/>
        case 'green':
            return <GreenSlider
                defaultValue={props.value}
                onChange={(e, newValue) => props.onChange(newValue, 'g')}
                track={false}
                valueLabelDisplay="auto"
                aria-label="green slider"
                step={1} 
                min={0} 
                max={255}/>
        case 'blue':
            return <BlueSlider
                defaultValue={props.value}
                onChange={(e, newValue) => props.onChange(newValue, 'b')}
                track={false}
                valueLabelDisplay="auto"
                aria-label="blue slider"
                step={1} 
                min={0} 
                max={255}/>
        default:
            return <Slider
                defaultValue={props.value}
                aria-label="slider"
                onChange={props.onChange}/>
    }
}

export default CustomRGBSlider;