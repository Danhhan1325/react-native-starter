import type { RootScreenProps } from '@/navigation/types';

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Paths } from '@/navigation/paths';
import { useTheme } from '@/theme';

import { AssetByVariant } from '@/components/atoms';
import { SafeScreen } from '@/components/templates';

function LoginScreen() {
  const { fonts, gutters, layout } = useTheme();
  const { t } = useTranslation();

  // const { isError, isFetching, isSuccess } = useQuery({
  //   queryFn: () => {
  //     return Promise.resolve(true);
  //   },
  //   queryKey: ['startup'],
  // });

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: Paths.Example }],
  //     });
  //   }
  // }, [isSuccess, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View
          style={[
            layout.flex_1,
            layout.col,
            layout.itemsCenter,
            layout.justifyCenter,
            gutters.paddingHorizontal_12,
          ]}
        >
          <View style={styles.logoContainer}>
            {/* <Text style={styles.logoText}>LOGO</Text> */}
            <AssetByVariant
              path="tom"
              resizeMode="contain"
              style={{ height: 100, width: 100 }}
            />
          </View>
          <Text style={fonts.size_24}>Welcome Back</Text>
          <Text style={[fonts.size_16, gutters.marginBottom_40]}>
            Sign in to your account
          </Text>
          <View style={[layout.fullWidth, gutters.marginBottom_24]}>
            <TextInput
              style={[
                layout.fullWidth,
                { height: 56 },
                {
                  backgroundColor: '#FFFFFF',
                  borderWidth: 1,
                  borderColor: '#E1E5E9',
                  borderRadius: 12,
                  paddingHorizontal: 16,
                  fontSize: 16,
                  color: '#333',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.05,
                  shadowRadius: 2,
                  elevation: 1,
                },
              ]}
              placeholder="Email"
              placeholderTextColor="#999"
              // value={email}
              // onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={layout.fullWidth}>
            <TextInput
              style={[
                layout.fullWidth,
                { height: 56 },
                {
                  backgroundColor: '#FFFFFF',
                  borderWidth: 1,
                  borderColor: '#E1E5E9',
                  borderRadius: 12,
                  paddingHorizontal: 16,
                  fontSize: 16,
                  color: '#333',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.05,
                  shadowRadius: 2,
                  elevation: 1,
                },
              ]}
              placeholder="Password"
              placeholderTextColor="#999"
              // value={password}
              // onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 56,
              backgroundColor: '#4A90E2',
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              shadowColor: '#4A90E2',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 8,
            }}
            // onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: '#FFFFFF',
                letterSpacing: 0.5,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    width: 80,
    height: 80,
    // backgroundColor: '#4A90E2',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    maxWidth: 320,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E5E9',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  loginButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
});

export default LoginScreen;
