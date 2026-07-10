const Card = {
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
