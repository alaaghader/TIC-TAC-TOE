import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Text,
    Alert
} from 'react-native';

const playGame = () => {
    const [dataSource, setDataSource] = useState([]);
    const [itemChecked, setItemChecked] = useState(false);
    const [firstPlayer, setFirstPlayer] = useState(false);

    const itemSelected = (id) => {
        dataSource.map((item) => {
            if (item.id === id) {
                if (item.selected == null) {
                    firstPlayer ? item.selected = "X" : item.selected = "O";
                    item.player = firstPlayer;
                    setItemChecked((prevState) => !prevState);
                } else
                    return null;
            }
        });
        setDataSource(dataSource);
        var letter = firstPlayer ? "X" : "O";
        setFirstPlayer(!firstPlayer);
        if (
            (dataSource[0].selected == letter && dataSource[1].selected == letter && dataSource[2].selected == letter) ||
            (dataSource[3].selected == letter && dataSource[4].selected == letter && dataSource[5].selected == letter) ||
            (dataSource[6].selected == letter && dataSource[7].selected == letter && dataSource[8].selected == letter) ||
            (dataSource[0].selected == letter && dataSource[3].selected == letter && dataSource[6].selected == letter) ||
            (dataSource[1].selected == letter && dataSource[4].selected == letter && dataSource[7].selected == letter) ||
            (dataSource[2].selected == letter && dataSource[5].selected == letter && dataSource[8].selected == letter) ||
            (dataSource[0].selected == letter && dataSource[4].selected == letter && dataSource[8].selected == letter) ||
            (dataSource[2].selected == letter && dataSource[4].selected == letter && dataSource[6].selected == letter)
        ) {
            Alert.alert(
                "Game Ended",
                "Player " + letter + " won",
                [{
                    text: 'Restart',
                    onPress: () => generateArray()
                },]
            )
        } else if (
            dataSource[0].selected != null && dataSource[1].selected != null && dataSource[2].selected != null &&
            dataSource[3].selected != null && dataSource[4].selected != null && dataSource[5].selected != null &&
            dataSource[6].selected != null && dataSource[7].selected != null && dataSource[8].selected != null &&
            dataSource[0].selected != null && dataSource[3].selected != null && dataSource[6].selected != null &&
            dataSource[1].selected != null && dataSource[4].selected != null && dataSource[7].selected != null &&
            dataSource[2].selected != null && dataSource[5].selected != null && dataSource[8].selected != null &&
            dataSource[0].selected != null && dataSource[4].selected != null && dataSource[8].selected != null &&
            dataSource[2].selected != null && dataSource[4].selected != null && dataSource[6].selected != null
        ) {
            Alert.alert(
                "Game Ended",
                "Draw",
                [{
                    text: 'Restart',
                    onPress: () => generateArray()
                },]
            )
        }
    };

    function generateArray() {
        let items = Array.apply(null, Array(9)).map((v, i) => {
            return {
                id: i,
                selected: null,
                player: null,
            };
        });
        setDataSource(items);
    };

    useEffect(() => {
        generateArray();
    }, []);

    return (
        <View style={styles.centerSection}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={dataSource}
                    extraData={itemChecked}
                    renderItem={(item) => {
                        return (
                            <View
                                onTouchStart={() => {
                                    itemSelected(item.item.id)
                                }}
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    borderLeftWidth: item.index == 1 || item.index == 2 || item.index == 4 || item.index == 5 || item.index == 7 || item.index == 8 ? 5 : 0,
                                    borderBottomWidth: item.index == 0 || item.index == 1 || item.index == 2 || item.index == 3 || item.index == 4 || item.index == 5 ? 5 : 0,
                                    borderColor: 'white',
                                    margin: 1,
                                    border: 1,
                                    height: 100
                                }}>
                                <Text style={item.item.player ? styles.textSecondPlayer : styles.textFirstPlayer}>{item.item.selected == null ? "" : item.item.selected}</Text>
                            </View>
                        )
                    }}
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                />
            </SafeAreaView >
        </View>
    );
};

const styles = StyleSheet.create({
    centerSection: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        backgroundColor: '#181818',
    },
    container: {
        marginTop: 150,
        margin: 25,
        flex: 1,
        backgroundColor: '#181818',
    },
    textFirstPlayer: {
        color: '#F5D10D',
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'YellowtailRegular'
    },
    textSecondPlayer: {
        color: '#BE0000',
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'YellowtailRegular'
    },
});

export default playGame