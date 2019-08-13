import React, { Component } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Subtitle } from 'native-base'
import { styles } from '../../style/Style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Sound = require('react-native-sound')

export class Game extends Component {

    sound1 = () => {
        Sound.setCategory('Playback')
        const requireAudio = require('../../assets/sound/606-snare1.wav');
        const sound = new Sound(requireAudio, (error) => {
            if (error) {
                console.warn(error)
                return false
            }

            // play when loaded
            sound.play(() => sound.release());
        });
    }
    render() {
        return (
            <Container>

                <Header style={{ backgroundColor: '#eee' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()} >
                            <Thumbnail small source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
                        </Button>
                    </Left>

                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('Leaderboards')} >
                            <Image source={require('../../assets/images/mahkota2.png')} style={{ width: 30, height: 30 }} />
                        </Button>
                    </Right>
                </Header>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={require('../../assets/images/backatas.png')} style={{ width: '100%', height: '60%' }}>
                        <View style={styles.textGame}>
                            <Text style={styles.textCenter2}>Combo Hits : 5</Text>
                            <Image source={require('../../assets/images/iconsayaa.png')} style={{ marginRight: "auto", marginLeft: "auto" }} />
                            <Text style={styles.textCenter2}>Shadow Of Sorrow</Text>
                        </View>
                    </ImageBackground>
                </View>


                <View style={{ flex: 1, }}>
                    <ImageBackground source={require('../../assets/images/back.png')} style={{ width: '100%', height: '100%' }}>
                        {/* btn 1 */}

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity onPress={this.sound1.bind(this)}>
                                <View style={[styles.btnL1, { marginLeft: 100 }]}>
                                    <View style={styles.btnD1}>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={[styles.btnL1, { marginRight: 100 }]}>
                                <View style={styles.btnD1}>
                                </View>
                            </View>
                        </View>
                        {/* btn 2 */}
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: -5 }}>
                            <View style={[styles.btnL2, { marginLeft: 40 }]}>
                                <View style={styles.btnD2}>
                                </View>
                            </View>
                            <View style={[styles.btnL2, { marginRight: 40 }]}>
                                <View style={styles.btnD2}>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>


            </Container>
        )
    }
}

export default Game
