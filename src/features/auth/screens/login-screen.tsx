import type { RootScreenProps } from '@/navigation/types';

import { useTranslation } from 'react-i18next';
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

function LoginScreen() {
  const { fonts, gutters, layout, components } = useTheme();
  const { t } = useTranslation();

  return (
    <SafeScreen style={components.loginContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={components.loginKeyboardView}
      >
        <View style={components.loginContent}>
          <View style={components.loginLogoContainer}>
            <AssetByVariant
              path="tom"
              resizeMode="contain"
              style={{ height: 100, width: 100 }}
            />
          </View>
          
          <Text style={[fonts.size_24, fonts.gray800, fonts.bold]}>
            {t('auth.login.title')}
          </Text>
          <Text style={[fonts.size_16, fonts.gray400, gutters.marginBottom_40]}>
            {t('auth.login.subtitle')}
          </Text>
          
          <View style={[layout.fullWidth, gutters.marginBottom_24]}>
            <TextInput
              style={components.loginInput}
              placeholder={t('auth.login.email_placeholder')}
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          
          <View style={layout.fullWidth}>
            <TextInput
              style={components.loginInput}
              placeholder={t('auth.login.password_placeholder')}
              placeholderTextColor="#999"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          
          <TouchableOpacity
            style={components.loginButton}
            activeOpacity={0.8}
          >
            <Text style={components.loginButtonText}>
              {t('auth.login.button')}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
}

export default LoginScreen;
