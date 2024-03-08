import { View, Image } from 'react-native';


import myImage from '../../assets/S.jpg'; // Mude aqui o nome da sua imagem

const Foto = () => {
  return (
    <View>
      <Image source={myImage} style={{ width: 300, height: 300, margin: 18 }} />
    </View>
  );
};


export default Foto;
