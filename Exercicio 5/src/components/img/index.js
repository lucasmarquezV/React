import { View, Image } from 'react-native';

const Foto = () => {
  let img = 'https://th.bing.com/th/id/OIP.yMOdBvjqu3bNkC9yKbVwIgAAAA?rs=1&pid=ImgDetMain';
  return (
    <View>
      <Image
        source={{ uri: img }}
        style={{ width: 250, height: 150, marginBottom: 30 }}
      />
    </View>
  );
};


export default Foto;
