import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'gymzoo',
  webDir: 'dist/gymzoo',
  server: {
    androidScheme: 'https'
  }
};

export default config;
