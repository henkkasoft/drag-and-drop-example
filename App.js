import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated,
  Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder, position };
  }

  renderAnimatedText(text) {
    return (
      <Animated.Text
        style={[this.state.position.getLayout(), styles.text]}
        {...this.state.panResponder.panHandlers}
      >
        {text}
      </Animated.Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.swiperContainer}>
          <Swiper style={styles.wrapper}>
            <View style={styles.slide3}>
              <Text style={styles.text}>Hello Stephen</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Hello Helpers</Text>
            </View>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello World</Text>
            </View>
          </Swiper>
        </View>

        <View style={styles.swiperContainer}>
          <Swiper style={styles.wrapper}>
            <View style={styles.slide1}>
              {this.renderAnimatedText('You are The Best')}
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>and Greatest</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Thank you</Text>
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiperContainer: {
    height: 250,
    width: SCREEN_WIDTH
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#ff0',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
