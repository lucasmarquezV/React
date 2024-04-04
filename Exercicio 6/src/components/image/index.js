import { View, Image } from 'react-native';

const Foto = () => {
  let img = 'https://cdn.pixabay.com/photo/2014/09/25/19/36/question-mark-460864_640.png';
  return (
    <View>
      <Image
        source={{ uri: img }}
        style={{ width: 250, height: 250, marginBottom: 30 }}
      />
    </View>
  );
};


export default Foto;
