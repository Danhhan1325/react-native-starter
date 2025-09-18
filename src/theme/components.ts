import type { ComponentTheme } from '@/theme/types/theme';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type AllStyle = {} & Record<string, ImageStyle | TextStyle | ViewStyle>;

const generateComponentStyles = ({
  backgrounds,
  fonts,
  layout,
  borders,
  gutters,
}: ComponentTheme) => {
  return {
    buttonCircle: {
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      ...backgrounds.purple100,
      ...fonts.gray400,
      borderRadius: 35,
      height: 64,
      width: 64,
    },
    circle250: {
      borderRadius: 140,
      height: 250,
      width: 250,
    },
    // Login Screen Components
    loginContainer: {
      ...layout.flex_1,
      ...backgrounds.gray50,
    },
    loginKeyboardView: {
      ...layout.flex_1,
    },
    loginContent: {
      ...layout.flex_1,
      ...layout.col,
      ...layout.itemsCenter,
      ...layout.justifyCenter,
      ...gutters.paddingHorizontal_32,
    },
    loginLogoContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      ...gutters.marginBottom_32,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    loginInput: {
      ...layout.fullWidth,
      height: 56,
      ...backgrounds.gray50,
      ...borders.w_1,
      borderColor: '#E1E5E9',
      ...borders.rounded_12,
      ...gutters.paddingHorizontal_16,
      fontSize: 16,
      color: '#333',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    loginButton: {
      ...layout.fullWidth,
      height: 56,
      backgroundColor: '#4A90E2',
      ...borders.rounded_12,
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      ...gutters.marginTop_24,
      shadowColor: '#4A90E2',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 8,
    },
    loginButtonText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#FFFFFF',
      letterSpacing: 0.5,
    },
  } as const satisfies AllStyle;
};

export default generateComponentStyles;
