import type { RootScreenProps } from '@/navigation/types';

import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTheme } from '@/theme';

import { AssetByVariant } from '@/components/atoms';
import { SafeScreen } from '@/components/templates';

import { createLoginStyles } from './LoginScreen.styles';

function LoginScreen() {
  const { fonts, gutters, layout, components, colors, ...theme } = useTheme();
  const { t } = useTranslation();

  const styles = useMemo(() => createLoginStyles(theme), [theme]);

  return (
    <SafeScreen style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <AssetByVariant
              path="tom"
              resizeMode="contain"
              style={{ height: 100, width: 100 }}
            />
          </View>
          
          <Text style={[fonts.size_24, fonts.gray800, fonts.bold, styles.title]}>
            {t('auth.login.title')}
          </Text>
          <Text style={[fonts.size_16, fonts.gray400, styles.subtitle]}>
            {t('auth.login.subtitle')}
          </Text>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={components.inputOutlined}
              placeholder={t('auth.login.email_placeholder')}
              placeholderTextColor={colors.gray400}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={components.inputOutlined}
              placeholder={t('auth.login.password_placeholder')}
              placeholderTextColor={colors.gray400}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          
          <TouchableOpacity
            style={[components.buttonPrimary, styles.button]}
            activeOpacity={0.8}
          >
            <Text style={components.buttonPrimaryText}>
              {t('auth.login.button')}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
}

export default LoginScreen;
