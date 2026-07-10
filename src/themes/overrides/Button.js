const Button = {
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: {
        fontWeight: 400,
        textTransform: 'capitalize',
        borderRadius: 4,
      },
      containedPrimary: {
        '&:hover': { backgroundColor: 'primary.dark' },
      },
      outlined: {
        border: '1px solid',
        '&:hover': { backgroundColor: 'transparent' },
      },
      sizeExtraSmall: {
        minWidth: 56,
        fontSize: '0.625rem',
        padding: '2px 8px',
      },
    },
    variants: [
      {
        props: { variant: 'dashed' },
        style: {
          border: '1px dashed',
          '&:hover': { borderStyle: 'dashed' },
        },
      },
      {
        props: { variant: 'shadow' },
        style: {
          boxShadow: '0 14px 12px rgba(24, 144, 255, 0.2)',
          '&:hover': { boxShadow: 'none' },
        },
      },
    ],
  },
};

export default Button;
