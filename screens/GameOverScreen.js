import { View, Image, StyleSheet, Text, useWindowDimensions, ScrollView } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundNumeber, useNumber, onStartNewGame}) {

  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width<380) {
    imageSize = 150;
  }

  if( height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  };

  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image style={styles.image} source={require('../assets/images/success.png')}/>
      </View>
      <View>
        <Text style={styles.sumaryText}> You phone need <Text style={styles.highlight}>{roundNumeber}</Text> rounds to guess the numer <Text style={styles.highlight}>{useNumber}</Text></Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWith = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex:1,
    padding:24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    // width: deviceWith < 380 ? 150 : 300,
    // height: deviceWith < 380 ? 150 : 300,
    // borderRadius: deviceWith < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  sumaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
});