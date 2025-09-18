import type { ComponentTheme } from '@/theme/types/theme';
import type { ViewStyle, TextStyle } from 'react-native';

export const createLoginStyles = (theme: ComponentTheme) => {
  const { layout, gutters, backgrounds, colors } = theme;

  return {
    container: {
      ...layout.flex_1,
      ...backgrounds.gray50,
    } as ViewStyle,

    keyboardView: {
      ...layout.flex_1,
    } as ViewStyle,

    content: {
      ...layout.flex_1,
      ...layout.col,
      ...layout.itemsCenter,
      ...layout.justifyCenter,
      ...gutters.paddingHorizontal_32,
    } as ViewStyle,

    logoContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      ...gutters.marginBottom_32,
      backgroundColor: colors.gray50,
      shadowColor: colors.gray800,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    } as ViewStyle,

    title: {
      ...gutters.marginBottom_8,
    } as TextStyle,

    subtitle: {
      ...gutters.marginBottom_40,
    } as TextStyle,

    inputContainer: {
      ...layout.fullWidth,
      ...gutters.marginBottom_24,
    } as ViewStyle,

    button: {
      ...gutters.marginTop_24,
    } as ViewStyle,
  };
};