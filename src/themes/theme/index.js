import { createTheme } from '@mui/material/styles';
import palette from '../palette';
import typography from '../typography';
import Button from '../overrides/Button';
import Card from '../overrides/Card';
import Input from '../overrides/Input';

const theme = createTheme({
  palette,
  typography,
  components: {
    ...Button,
    ...Card,
    ...Input,
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          minWidth: 16,
          height: 16,
          padding: 4,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 6,
          borderRadius: 100,
        },
        bar: {
          borderRadius: 100,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#fafafa',
            borderTop: '1px solid #f0f0f0',
            borderBottom: '2px solid #f0f0f0',
            fontWeight: 700,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root:hover': {
            backgroundColor: '#fafafa',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          padding: 12,
          borderColor: '#f0f0f0',
        },
        sizeSmall: {
          padding: 8,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 46,
          textTransform: 'capitalize',
          borderRadius: 4,
          '&:hover': {
            backgroundColor: 'rgba(230, 247, 255, 0.6)',
            color: '#1890ff',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: '#ffffff',
        },
      },
    },
  },
});

export default theme;
