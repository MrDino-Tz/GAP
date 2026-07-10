const Input = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: '#434343',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#d9d9d9',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#69c0ff',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#1890ff',
          borderWidth: 2,
        },
        '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#ff7875',
        },
        '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#f5222d',
          borderWidth: 2,
        },
      },
      input: {
        padding: '10.5px 14px 10.5px 12px',
      },
      sizeSmall: {
        input: {
          padding: '7.5px 8px 7.5px 12px',
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: '#8c8c8c',
      },
      outlined: {
        lineHeight: '1rem',
        '&.MuiInputLabel-shrink': {
          background: '#ffffff',
          padding: '0 8px',
          marginLeft: -6,
          top: 2,
          lineHeight: '1rem',
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        color: '#434343',
      },
      icon: {
        color: '#8c8c8c',
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginTop: 4,
        marginLeft: 0,
      },
    },
  },
};

export default Input;
