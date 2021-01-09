import type { StackScreenProps } from '@react-navigation/stack';
import type { Factor } from 'react-native-twilio-verify';

export type RootStackParamList = {
  Factors: { message: string } | undefined;
  CreateFactor: undefined;
  Factor: { factor: Factor };
  Challenge: { factor: Factor; challengeSid: string };
};

export type ViewProps<
  RouteName extends keyof RootStackParamList
> = StackScreenProps<RootStackParamList, RouteName>;