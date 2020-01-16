import React, { useState } from 'react';

import ColorPicker from './components/ColorPicker';

function App() {
  const [selectedColor, setSelectedColor] = useState('#FF0000');
  const [colors, setColors] = useState(['#FF0000', '#BDFF00', '#4200FF', '#FFD800']);

  const onChangeHandler = hexColor => {
    if (colors.indexOf(hexColor.toUpperCase()) < 0) {
      setColors(colors.concat([hexColor.toUpperCase()]));
    }
    setSelectedColor(hexColor.toUpperCase());
  }
  return (
    <div>
      <ColorPicker
        colors={colors}
        onChange={onChangeHandler}
        value={selectedColor}
        />
    </div>
  );
}

export default App;
