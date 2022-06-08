import {ColorsType} from 'src/types/colors';

interface ButtonStyle {
  button: {
    backgroundColor: keyof ColorsType;
    borderWidth?: number;
    borderColor?: keyof ColorsType;
  };
  title: {
    color: keyof ColorsType;
  };
  icon: {
    color: keyof ColorsType;
  };
}

export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: 'primary',
    },
    title: {
      color: 'onPrimary',
    },
    icon: {
      color: 'onPrimary',
    },
  },
  disabled: {
    button: {
      backgroundColor: 'gray',
    },
    title: {
      color: 'onPrimary',
    },
    icon: {
      color: 'onPrimary',
    },
  },
};
const buttonSecondary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: 'secondary',
    },
    title: {
      color: 'onPrimary',
    },
    icon: {
      color: 'onPrimary',
    },
  },
  disabled: {
    button: {
      backgroundColor: 'gray',
    },
    title: {
      color: 'onPrimary',
    },
    icon: {
      color: 'onPrimary',
    },
  },
};

const buttonOutline: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: 'primary',
    },
    title: {
      color: 'primary',
    },
    icon: {
      color: 'primary',
    },
  },
  disabled: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: 'gray',
    },
    title: {
      color: 'gray',
    },
    icon: {
      color: 'gray',
    },
  },
};

export const variants = {
  primary: buttonPrimary,
  outline: buttonOutline,
  secondary: buttonSecondary,
};
