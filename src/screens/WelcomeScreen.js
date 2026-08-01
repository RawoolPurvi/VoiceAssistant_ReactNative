import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Text style={styles.welcomeText}>AURA</Text>
            <Image
                source={require('../../assets/images/botDark.png')}
                style={styles.logo}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.startNow}>Start Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    welcomeText: {
        fontSize: wp(13),
        fontWeight: '700',
        letterSpacing: wp(0.4),
        color: '#FFFFFF',
        fontFamily: 'serif',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    tagline: {
        fontSize: wp(3.5),
        fontWeight: '500',
        letterSpacing: wp(0.2),
        color: '#A1A1AA',
        marginTop: hp(1.5),
        textAlign: 'center',
        lineHeight: hp(3.5),
    },
    tag: {
        fontSize: wp(4),
        fontWeight: '300',
        fontStyle: 'italic',
        letterSpacing: wp(0.2),
        color: '#A1A1AA',
        marginTop: hp(0.5),
        textAlign: 'center',
        lineHeight: hp(3.5),
    },
    logo: {
        marginTop: hp(5),
        width: wp(65),
        height: wp(65),
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#77D0AA',
        paddingVertical: hp(1.8),
        paddingHorizontal: wp(8),
        borderRadius: wp(2),
        marginTop: hp(8),
        width: wp(60),
        alignItems: 'center',
    },
    startNow: {
        fontSize: wp(5),
        fontWeight: '700',
        letterSpacing: wp(0.4),
        color: '#FFFFFF',
        fontFamily: 'serif',
        textAlign: 'center',
    },
})


export default WelcomeScreen;