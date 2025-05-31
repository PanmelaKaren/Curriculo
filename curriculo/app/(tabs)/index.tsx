import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import Layout from '../../components/Layout';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <Layout title="Panmela Karen">
      <View className="items-center space-y-4 mt-2">
        <Image
          source={{ uri: 'https://i.imgur.com/lLxqFzS.png' }} // imagem bonita e profissional
          className="w-40 h-40 rounded-full border-4 border-accent shadow-lg"
        />
        <Text className="text-2xl font-bold text-accent tracking-wide">
          Desenvolvedora Full Stack
        </Text>
        <Text className="text-lg text-gray-800 text-center leading-relaxed px-4">
          Olá! Sou a Panmela, apaixonada por tecnologia e inovação. Este app apresenta meu currículo, experiência e projetos com muito carinho.
        </Text>

        <View className="flex-row space-x-5 mt-4">
          <SocialIcon name="whatsapp" color="#25D366" url="https://wa.me/5599999999999" />
          <SocialIcon name="envelope" color="#EA4335" url="mailto:panmela@email.com" />
          <SocialIcon name="linkedin" color="#0077B5" url="https://linkedin.com/in/panmela" />
          <SocialIcon name="instagram" color="#C13584" url="https://instagram.com/panmela" />
          <SocialIcon name="github" color="#000" url="https://github.com/panmela" />
        </View>
      </View>
    </Layout>
  );
}

function SocialIcon({ name, color, url }: { name: any; color: string; url: string }) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <FontAwesome name={name} size={28} color={color} />
    </TouchableOpacity>
  );
}
