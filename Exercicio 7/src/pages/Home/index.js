import { Text, View, ScrollView } from 'react-native';
import {styles} from './style';
import Anuncio from '../../components/Anuncio/index';

const Home = () =>{
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Anuncio link="https://i0.wp.com/imagenesgratis.com.es/wp-content/uploads/2015/11/Cats-Wallpaper-Image-Photos.jpg?fit=1920%2C1200&ssl=1" desc="Vende-se Gatinho por apenas R$:50, OBS: Ele está assustado" />
        <Anuncio link="https://i1.wp.com/conceitoit.com/wp-content/uploads/2019/12/img_1563.jpg?w=1200&ssl=1" desc="Skin care R$:100, Perfeito para deixar a pele lisa e fofa" />
        <Anuncio link="https://th.bing.com/th/id/OIP.qlklIyy1T8I3yy6oLPHNaAHaKI?rs=1&pid=ImgDetMain" desc="Iphone na promoção de 40% de       R$:2.500 por R$:1500" />
      </ScrollView>
    </View>
  );
}

export default Home;