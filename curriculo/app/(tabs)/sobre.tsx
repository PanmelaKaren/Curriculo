import { Text } from 'react-native';
import Layout from '../../components/Layout';

export default function SobreScreen() {
  return (
    <Layout title="Sobre">
      <Text>Tecnologias utilizadas no desenvolvimento:</Text>
      <Text>- React Native</Text>
      <Text>- Expo Router</Text>
      <Text>- TypeScript</Text>
      <Text>- AsyncStorage</Text>
      <Text>- Styled Components ou Tailwind (opcional)</Text>
    </Layout>
  );
}
