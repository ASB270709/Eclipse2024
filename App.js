import {useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 5000, 
      useNativeDriver: false, 
    }).start();
  }, [moonAnimation]);

  const moonLeft = moonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '79.5%']
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.moon, left: moonLeft}} /> {}
      <Text>Eclipse 2024 🌒</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  moon: {
    position: 'absolute', 
    bottom: '50%', 
    width: 50, 
    height: 50,
    borderRadius: 25, 
    backgroundColor: '#fff', 
  },
});
