import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const homePage = ({ navigation }) => {
    return (
        <View style={styles.centerSection}>
            <View style={styles.buttonSection}>
                <Text style={styles.titleSection}>
                    TIC-TAC-TOE
                </Text>
                <TouchableHighlight
                    style={styles.submit}
                    underlayColor='#F4D10D'
                    onPress={() =>
                        navigation.navigate('Game')
                    }
                >
                    <Text style={styles.submitText}>
                        Play Game
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.submit}
                    underlayColor='#F4D10D'
                    onPress={() =>
                        navigation.navigate('Rules')
                    }
                >
                    <Text style={styles.submitText}>Rules & Conditions</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centerSection: {
        backgroundColor: '#181818',
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleSection: {
        fontSize: 35,
        letterSpacing: 5,
        fontFamily: 'YellowtailRegular',
        fontWeight: 'bold',
        color: '#F6E71D',
    },
    buttonSection: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 40,
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#F6E71D',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F4D10D'
    },
    submitText: {
        color: '#020202',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'YellowtailRegular'
    }
});

export default homePage