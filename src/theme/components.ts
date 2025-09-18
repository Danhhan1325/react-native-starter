import type { ComponentTheme } from '@/theme/types/theme';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type AllStyle = {} & Record<string, ImageStyle | TextStyle | ViewStyle>;

const generateComponentStyles = ({
  backgrounds,
  fonts,
  layout,
  borders,
  gutters,
  colors,
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
    // Reusable Input Variants
    inputOutlined: {
      ...layout.fullWidth,
      height: 56,
      ...backgrounds.gray50,
      ...borders.w_1,
      borderColor: colors.gray200,
      ...borders.rounded_16,
      ...gutters.paddingHorizontal_16,
      fontSize: 16,
      color: colors.gray800,
      shadowColor: colors.gray800,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    // Reusable Button Variants
    buttonPrimary: {
      ...layout.fullWidth,
      height: 56,
      backgroundColor: colors.purple500,
      ...borders.rounded_16,
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      shadowColor: colors.purple500,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 8,
    },
    buttonPrimaryText: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.gray50,
      letterSpacing: 0.5,
    },
  } as const satisfies AllStyle;
};

export default generateComponentStyles;
