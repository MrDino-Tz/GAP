import { blue, red, gold, cyan, green, grey } from '@ant-design/colors';

const palette = (mode) => ({
  ...(mode === 'dark'
    ? {
        mode: 'dark',
        primary: {
          lighter: blue[1], light: blue[4], main: blue[6], dark: blue[7], darker: blue[9],
          contrastText: '#ffffff',
        },
        secondary: {
          lighter: grey[1], light: grey[4], main: grey[6], dark: grey[8], darker: grey[10],
          contrastText: grey[0],
        },
        error: { lighter: '#fff1f0', light: '#ff7875', main: '#f5222d', dark: '#a8071a', darker: '#5c0011', contrastText: '#ffffff' },
        success: { lighter: '#f6ffed', light: '#95de64', main: '#52c41a', dark: '#237804', darker: '#092b00', contrastText: '#ffffff' },
        warning: { lighter: '#fffbe6', light: '#ffd666', main: '#faad14', dark: '#ad6800', darker: '#613400', contrastText: '#ffffff' },
        info: { lighter: cyan[1], light: cyan[4], main: cyan[6], dark: cyan[7], darker: cyan[9], contrastText: '#ffffff' },
        text: { primary: grey[7], secondary: grey[5], disabled: grey[4] },
        background: { paper: '#ffffff', default: grey[0] },
        divider: grey[2],
        action: { disabled: grey[3] },
      }
    : {
        mode: 'light',
        primary: {
          lighter: blue[1], light: blue[4], main: blue[6], dark: blue[7], darker: blue[9],
          contrastText: '#ffffff',
        },
        secondary: {
          lighter: grey[1], light: grey[4], main: grey[6], dark: grey[8], darker: grey[10],
          contrastText: grey[0],
        },
        error: { lighter: '#fff1f0', light: '#ff7875', main: '#f5222d', dark: '#a8071a', darker: '#5c0011', contrastText: '#ffffff' },
        success: { lighter: '#f6ffed', light: '#95de64', main: '#52c41a', dark: '#237804', darker: '#092b00', contrastText: '#ffffff' },
        warning: { lighter: '#fffbe6', light: '#ffd666', main: '#faad14', dark: '#ad6800', darker: '#613400', contrastText: '#ffffff' },
        info: { lighter: cyan[1], light: cyan[4], main: cyan[6], dark: cyan[7], darker: cyan[9], contrastText: '#ffffff' },
        text: { primary: grey[7], secondary: grey[5], disabled: grey[4] },
        background: { paper: '#ffffff', default: grey[0] },
        divider: grey[2],
        action: { disabled: grey[3] },
      }),
});

export default palette;
