import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';

const rules = () => {
    return (
        <View style={styles.centerSection}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.text}>
                        You probably already know how to play Tic-Tac-Toe. It's a really simple game, right? That's what most people think. But if you really wrap your brain around it, you'll discover that Tic-Tac-Toe isn't quite as simple as you think!
                        
                        Tic-Tac -Toe (along with a lot of other games) involves looking ahead and trying to figure out what the person playing against you might do next.
                    </Text>
                    <Text style={styles.head}>
                        RULES FOR TIC-TAC-TOE
                    </Text>
                    <View style={styles.orderedList}>
                        <Text style={styles.text}>
                            1. The game is played on a grid that's 3 squares by 3 squares.
                        </Text>
                    </View>
                    <View style={styles.orderedList}>
                        <Text style={styles.text}>
                            2. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.
                        </Text>
                    </View>
                    <View style={styles.orderedList}>
                        <Text style={styles.text}>
                            3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
                        </Text>
                    </View>
                    <View style={styles.orderedList}>
                        <Text style={styles.text}>
                            4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
                        </Text>
                    </View>       
                    <Text style={styles.head}>
                    HOW CAN I WIN AT TIC-TAC-TOE?
                    </Text>
                    <Text style={styles.text}>
                    To beat the computer (or at least tie), you need to make use of a little bit of strategy. Strategy means figuring out what you need to do to win.

Part of your strategy is trying to figure out how to get three Xs in a row. The other part is trying to figure out how to stop the computer from getting three Os in a row.

After you put an X in a square, you start looking ahead. Where's the best place for your next X? You look at the empty squares and decide which ones are good choices—which ones might let you make three Xs in a row.

You also have to watch where the computer puts its O. That could change what you do next. If the computer gets two Os in a row, you have to put your next X in the last empty square in that row, or the computer will win. You are forced to play in a particular square or lose the game.

If you always pay attention and look ahead, you'll never lose a game of Tic-Tac-Toe. You may not win, but at least you'll tie.
                    </Text>
                </ScrollView>     
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
        marginTop: 70,
        margin: 25,
        flex: 1,
        backgroundColor: '#181818',
    },
    text: {
        fontSize: 20,
        fontFamily: 'YellowtailRegular',
        color: '#F6E71D',
    },
    head: {
        marginVertical: 50,
        fontSize: 25,
        fontFamily: 'YellowtailRegular',
        color: '#BE0000',
    },
    orderedList: {
        marginHorizontal: 30,
        marginVertical: 20,
        fontSize: 25,
        fontFamily: 'YellowtailRegular',
        color: '#BE0000',
    },
});

export default rules