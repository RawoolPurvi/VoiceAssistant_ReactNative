import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Features from '../components/features'
import { dummyMessages } from '../constants/index.js'
import Voice from '@react-native-voice/voice';

const HomeScreen = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const spinAnim = useRef(new Animated.Value(0)).current;
  const [speaking, setSpeaking] = useState(true);

  const clearMessages = () => {
    setMessages([]);
  }

  const stopSpeaking =() => {
    setSpeaking(false);
  }

  useEffect(() => {
    if (recording) {
      Animated.loop(
        Animated.timing(spinAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    } else {
      spinAnim.stopAnimation();
      spinAnim.setValue(0);
    }
  }, [recording]);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.page}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/botDark.png')}
          style={styles.logo}
        />
      </View>
      {/* messages || features */}
      {messages.length > 0 ? (
        <View style={styles.contentWrapper}>
          {/* messages */}
          <View style={styles.messagesWrapper}>
            <Text style={styles.messageText}>Assistant</Text>
            <View style={styles.textBox}>
              <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}>
                {
                  messages.map((message, index) => {
                    if (message.role === 'assistant') {
                      if (message.content.includes('http')) {
                        // it's a AI image
                        return (
                          <View key={index} style={styles.AssistantWrapper}>
                            <View style={styles.AssistantBox}>
                              <Image source={{ uri: message.content }} style={styles.assistantImage} />
                            </View>
                          </View>
                        )
                      } else {
                        // text response
                        return (
                          <View key={index} style={styles.AssistantWrapper}>
                            <View style={styles.AssistantBox}>
                              <Text style={styles.userInputText}>{message.content}</Text>
                            </View>
                          </View>
                        )
                      }
                    } else {
                      //user input
                      return (
                        <View key={index} style={styles.userInputWrapper}>
                          <View style={styles.userInputBox}>
                            <Text style={styles.userInputText}>{message.content}</Text>
                          </View>
                        </View>
                      )
                    }
                  })
                }
              </ScrollView>
            </View>
          </View>
        </View>
      ) : (
        <View style={[styles.contentWrapper, styles.featuresWrapper]}>
          <Text style={styles.featuresHeading}>Features</Text>
          <Features logo={require('../../assets/images/chatgptIcon.png')} title='ChatGPT' description='ChatGPT can provide you with instant and knowledge-based responses to your questions, assist you with creative ideas on a wide range of topic' />
          <Features logo={require('../../assets/images/dalle.png')} title='DALL-E' description='DALL-E can generate realistic, imaginative and diverse images from textual description, expanding the boundaries of visual creativity' color='#ed8ef5' />
          <Features logo={require('../../assets/images/smartCyan.png')} title='Smart-AI' description='A powerful voice assistant with the abilities of ChatGPT and DALL-E, providing you the best of both worlds' color='cyan' />
        </View>
      )
      }

      <View style={styles.bottomWrapper}>
        {/* left — stop button or empty spacer */}
        <View style={styles.bottomSide}>
          {speaking && (
            <TouchableOpacity style={styles.stopButton} onPress={stopSpeaking}>
              <Text style={styles.sideButtonText}>Stop</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* centre — recording icon */}
        <View style={styles.bottomCentre}>
          {recording ? (
            <TouchableOpacity>
              <Animated.Image
                source={require('../../assets/images/recordingIconDark.png')}
                style={[styles.recordingIcon, { transform: [{ rotate: spin }] }]}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image source={require('../../assets/images/recordingIconDark.png')} style={styles.recordingIcon} />
            </TouchableOpacity>
          )}
        </View>

        {/* right — clear button or empty spacer */}
        <View style={styles.bottomSide}>
          {messages.length > 0 && (
            <TouchableOpacity style={styles.clearButton} onPress={clearMessages}>
              <Text style={styles.sideButtonText}>Clear</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  featuresWrapper: {
    marginTop: hp(2),
  },
  featuresHeading: {
    fontSize: wp(7),
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'left',
    marginBottom: hp(2),
    marginHorizontal: wp(5),
  },
  logo: {
    marginTop: hp(7),
    width: wp(35),
    height: wp(35),
    resizeMode: 'contain',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messagesWrapper: {
    flex: 1,
    width: '100%',
  },
  messageText: {
    fontSize: wp(6),
    color: '#FFFFFF',
    fontWeight: '500',
    marginTop: hp(2),
    marginHorizontal: wp(5),
    textAlign: 'left',
  },
  textBox: {
    height: hp(50),
    width: wp(90),
    backgroundColor: '#ffffff85',
    marginTop: hp(2),
    marginHorizontal: wp(5),
    borderRadius: wp(3),
  },
  messageContentText: {
    color: '#ffffff',
    fontFamily: 'serif',
    fontSize: wp(4),
  },
  messageContent: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  userInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: wp(20),
  },
  AssistantWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: wp(20),
    marginLeft: wp(2),
  },
  AssistantBox: {
    backgroundColor: '#77D0AA',
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    marginVertical: hp(1),
    marginRight: wp(2),
    borderTopLeftRadius: 0,
  },
  userInputBox: {
    backgroundColor: '#ffffff',
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    marginVertical: hp(1),
    marginRight: wp(2),
    borderTopRightRadius: 0,
  },
  userInputText: {
    fontSize: wp(4),
    color: '#000000',
    fontFamily: 'serif',
  },
  assistantImage: {
    resizeMode: 'contain',
    width: wp(60),
    height: hp(60),
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
  },
  bottomWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    backgroundColor: '#000000',
    marginBottom: hp(5),
  },
  bottomSide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomCentre: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordingIcon: {
    width: wp(18),
    height: wp(18),
    resizeMode: 'contain',
  },
  stopButton: {
    backgroundColor: '#dd5e5e',
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: '#ffffff30',
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideButtonText: {
    color: '#FFFFFF',
    fontSize: wp(4),
    fontWeight: '600',
  }
});

export default HomeScreen