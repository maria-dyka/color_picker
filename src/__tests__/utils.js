import { convertRGBtoHex, convertHexToRGB } from '../utils';

it('converts rgb to hex', () => {
  expect(convertRGBtoHex({r: 0, g: 0, b: 0})).toEqual('#000000');
  expect(convertRGBtoHex({r: 255, g: 255, b: 255})).toEqual('#ffffff');
  expect(convertRGBtoHex({r: 126, g: 126, b: 126})).toEqual('#7e7e7e');
});

it('converts hex to rgb', () => {
    expect(convertHexToRGB('#000000')).toEqual({r: 0, g: 0, b: 0});
    expect(convertHexToRGB('#ffffff')).toEqual({r: 255, g: 255, b: 255});
    expect(convertHexToRGB('#7e7e7e')).toEqual({r: 126, g: 126, b: 126});
});