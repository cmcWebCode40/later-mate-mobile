import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface SkeletonProps {
  height: number;
  width: number;
  backgroundColor1?: string;
  backgroundColor2?: string;
  style?: StyleProp<ViewStyle> | undefined;
}

const Skeleton: React.FunctionComponent<SkeletonProps> = ({
  height,
  width,
  style,
  backgroundColor1,
  backgroundColor2,
}) => {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: true,
        duration: 1000,
      })
    ).start();
  }, [translateX, width]);

  return (
    <View
      style={StyleSheet.flatten([
        {
          height,
          width,
          backgroundColor: backgroundColor1 || 'rga(0,0,0,0.12)',
          overflow: 'hidden',
        },
        style,
      ])}
    >
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          transform: [{ translateX: translateX }],
        }}
      >
        <LinearGradient
          style={{ width: '100%', height: '100%' }}
          colors={[
            'transparent',
            backgroundColor2 || 'rgba(0, 0, 0, 0.05)',
            'transparent',
          ]}
          start={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </View>
  );
};

export default Skeleton;
