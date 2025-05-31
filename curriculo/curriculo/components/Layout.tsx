import { View, Text, SafeAreaView } from 'react-native';
import { PropsWithChildren } from 'react';

export default function Layout({ children, title }: PropsWithChildren<{ title: string }>) {
  return (
    <SafeAreaView className="flex-1 bg-primary px-6 pt-12">
      <Text className="text-4xl font-extrabold text-accent mb-6 text-center tracking-wider">
        {title}
      </Text>
      {children}
    </SafeAreaView>
  );
}
