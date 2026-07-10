const Card = {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        border: '1px solid',
        borderColor: '#141414',
        boxShadow: 'none',
        position: 'relative',
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 20,
        '&:last-child': { paddingBottom: 20 },
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: '20px 20px 0',
      },
      title: {
        fontWeight: 600,
        fontSize: '0.875rem',
        lineHeight: 1.57,
      },
    },
  },
};

export default Card;
