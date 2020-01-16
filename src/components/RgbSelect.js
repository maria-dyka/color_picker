import React, { useState, useEffect } from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

const RgbSelect = props => {
    const [rgbValues, setRGBvales] = useState({});

    useEffect(() => {
        convertHexToRGB(props.value);
    }, [props.value])

    const convertRGBtoHex = () => {
        const [r, g, b] = Object.values(rgbValues);
        const RR = (r !== 0)? r.toString(16): '00';
        const GG = (g !== 0)? g.toString(16): '00';
        const BB = (b !== 0)? b.toString(16): '00';
        const hexColor = `#${RR + GG + BB}`;
        return hexColor;
    }

    const convertHexToRGB = hex => {
        let r = hex.slice(1, 3);
        let g = hex.slice(3, 5);
        let b = hex.slice(5, 7);
        let rgb = {
            r: parseInt(r, 16),
            g: parseInt(g, 16),
            b: parseInt(b, 16)
        };
        setRGBvales(rgb);
    }

    const changeColorHandler = (e, newValue, color) => {
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
        }
    }

    const cancelHandler = () => {
        convertHexToRGB(props.value)
    }

    const submitHandler = () => {
        const hexColor = convertRGBtoHex();
        props.onChange(hexColor)
    }

    return (
        <FormControl>
            <Select>
                <Slider
                    defaultValue={rgbValues.r}
                    step={1}
                    min={0}
                    max={255}
                    onChange={(e, newValue) => changeColorHandler(e,newValue, 'r')}/>
                <Slider
                    defaultValue={rgbValues.g}
                    step={1}
                    min={0}
                    max={255}
                    onChange={(e, newValue) => changeColorHandler(e, newValue, 'g')}/>
                <Slider
                    defaultValue={rgbValues.b}
                    step={1}
                    min={0}
                    max={255}
                    onChange={(e, newValue) => changeColorHandler(e, newValue, 'b')}/>
                <div>
                    <Button onClick={cancelHandler}>Cancel</Button>
                    <Button onClick={submitHandler}>OK</Button>
                </div>
            </Select>
        </FormControl>
    )
}

export default RgbSelect;