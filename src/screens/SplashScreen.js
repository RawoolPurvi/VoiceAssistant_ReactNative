import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // Fade in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start()

    // Navigate to Welcome after 2.5 seconds
    const timer = setTimeout(() => {
      navigation.replace('Welcome')
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={styles.page}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.welcomeText}>AURA</Text>
        <Text style={styles.tagline}>YOUR PERSONAL AI VOICE ASSISTANT</Text>
        <Text style={styles.tag}>The future is listening</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A0A0A',
  },
  welcomeText: {
    fontSize: 52,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: '#FFFFFF',
    fontFamily: 'serif',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.8,
    color: '#A1A1AA',
    marginTop: 12,
    textAlign: 'center',
    lineHeight: 26,
  },
  tag: {
    fontSize: 15,
    fontWeight: '300',
    fontStyle: 'italic',
    letterSpacing: 0.8,
    color: '#A1A1AA',
    marginTop: 4,
    textAlign: 'center',
    lineHeight: 26,
  },
})

export default SplashScreen
