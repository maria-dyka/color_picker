import React, { useState, useCallback } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import ColorPicker from './components/ColorPicker';

const theme = createMuiTheme({
  palette: {
    secondary: {
      light: grey[400],
      main: grey[600],
      dark: grey[800]
    },
  },
  spacing: 49
});

const useStyles = makeStyles(theme => ({
  app: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10vh',
    height: '90vh',
    backgroundColor: '#f5f5f5'
  }
}))

function App() {
  const [selectedColor, setSelectedColor] = useState('#FF0000');
  const colors = ['#FF0000', '#BDFF00', '#4200FF', '#FFD800'];

  const styles = useStyles();

  const onChangeHandler = useCallback(hexColor => {
    setSelectedColor(hexColor.toUpperCase());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <ColorPicker
          colors={colors}
          onChange={onChangeHandler}
          value={selectedColor}
          />
      </div>
    </ThemeProvider>
  );
}

export default App;