import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Features = ({ logo, title, description, color }) => {
    return (
        <View style={[styles.featureContainer, color && { backgroundColor: color }]}>
            <View style={styles.featureTitle}>
                <Image source={logo} style={styles.featureIcon} />
                <Text style={styles.featureName}>{title}</Text>
            </View>
            <Text style={styles.featureDetails}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    featureContainer: {
        backgroundColor: '#8aedc2',
        padding: wp(3),
        borderRadius: wp(2),
        marginBottom: hp(2),
        marginHorizontal: wp(5),
    },
    featureTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    featureIcon: {
        width: wp(10),
        height: wp(10),
        resizeMode: 'contain',
    },
    featureName: {
        fontSize: wp(5),
        fontWeight: '700',
        color: '#000000b6',
        marginLeft: wp(2),
    },
    featureDetails: {
        fontSize: wp(4),
        fontWeight: '500',
        color: '#000000b9',
        marginTop: hp(1),
    },
})

export default Features
