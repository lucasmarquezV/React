import { View, Image } from 'react-native';

const Foto = () => {
  let img = 'https://th.bing.com/th/id/R.56ccadf128cfb77a382a79d159343b9f?rik=zFMVGrQwLB4H4g&riu=http%3a%2f%2fwww.carrodegaragem.com%2fwp-content%2fuploads%2f2016%2f03%2fcombustiveis.jpg&ehk=kKgYQFUcvq55btnvv6xYX5g89eKRJTHek0l0vYEJ1Oc%3d&risl=&pid=ImgRaw&r=0';
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
