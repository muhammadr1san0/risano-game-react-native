import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, Alert } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Subtitle, H1, H3 } from 'native-base'
import { styles } from '../../style/Style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { soundbutton } from '../../redux/actions/games';
import { getpattern } from '../../redux/actions/games'
const Sound = require('react-native-sound')

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button1: null,
            button2: null,
            button3: null,
            button4: null,
            pattern: null,
            buttonNumber: null,
            poin: 0,
            activepoint: false,
            combo: 0,
            plushpoint: null,
            showpoint: false

        }

    }

    sound1 = () => {
        this.state.button1.stop(() => {
            this.state.button1.play();
        });
        if (this.state.pattern === 1) {
            if (this.state.activepoint) {
                this.setState({
                    poin: this.state.poin + this.state.plushpoint,
                    activepoint: false,
                    showpoint: true
                })
            }
        } else {
            Alert.alert("anda Kalah")
        }

    }
    sound2 = () => {
        this.state.button2.stop(() => {
            this.state.button2.play();
        });
        if (this.state.pattern === 2) {
            if (this.state.activepoint) {
                this.setState({
                    poin: this.state.poin + this.state.plushpoint,
                    activepoint: false,
                    showpoint: true

                })
            }
        } else {
            Alert.alert("anda Kalah")
        }
    }
    sound3 = () => {
        this.state.button3.stop(() => {
            this.state.button3.play();
        });
        if (this.state.pattern === 3) {
            if (this.state.activepoint) {
                this.setState({
                    poin: this.state.poin + this.state.plushpoint,
                    activepoint: false,
                    showpoint: true
                })
            }
        } else {
            Alert.alert("anda Kalah")
        }
    }
    sound4 = () => {
        this.state.button4.stop(() => {
            // Note: If you want to play a sound after stopping and rewinding it,
            // it is important to call play() in a callback.
            this.state.button4.play();
        });
        if (this.state.pattern === 4) {
            if (this.state.activepoint) {
                this.setState({
                    poin: this.state.poin + this.state.plushpoint,
                    activepoint: false,
                    showpoint: true
                })
            }
        } else {
            Alert.alert("anda Kalah")
        }

    }

    startPettern = async () => {
        await this.props.dispatch(getpattern())
            .then((res) => {
                // console.warn(this.props.pattern)
                if (this.props.pattern) {
                    let combo = this.props.pattern.length
                    this.setState({
                        combo: combo
                    })
                    let lengthdelay = 3000
                    this.props.pattern.map((item) => {
                        let delay = item.delay
                        let chilpattern = item.pattern.split("")
                        chilpattern.push(0)
                        setTimeout(() => {
                            this.setState({
                                plushpoint: item.plushpoint
                            })
                            // let chilpattern = [1, 2, 3, 4, 1, 2, 3, 4]
                            chilpattern.map((item2, index) => {
                                setTimeout(() => {
                                    // console.warn(item2)
                                    if (item2 === 0) {
                                        this.setState({
                                            combo: this.state.combo - 1
                                        })
                                    }
                                    this.setState({
                                        pattern: parseInt(item2),
                                        activepoint: true,
                                        showpoint: false
                                    });
                                }, index * delay);
                                // console.warn(item2)
                            })
                        }, lengthdelay)

                        lengthdelay += chilpattern.length * delay + 3000
                    })
                }

            })
            .catch((err) => {
                console.warn(err)
            })
    }

    componentWillMount = async () => {

        await this.props.dispatch(soundbutton())
            .then((res) => {
                if (this.props.soundbutton) {
                    this.props.soundbutton.map((item) => {
                        var whoosh = new Sound(item.sound, Sound.MAIN_BUNDLE, (error) => {
                            if (error) {
                                console.log('failed to load the sound', error);
                                return;
                            }
                            // loaded successfully
                            console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

                        });
                        this.setState({
                            ["button" + item.no_button]: whoosh
                        })
                    })
                }
                this.startPettern()
                console.warn(this.state.button2)



            })
            .catch((err) => {
                console.warn(err)
                Alert.alert("Program Bermasalah coba ulangi lagi")
            })

        // var whoosh = new Sound('http://192.168.6.112/sound/909-HiTom-3D3.wav', Sound.MAIN_BUNDLE, (error) => {
        //     if (error) {
        //         console.log('failed to load the sound', error);
        //         return;
        //     }
        //     // loaded successfully
        //     console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

        // });
        // this.setState({ button1: whoosh })
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
                        <H1 style={{ textAlign: "right", fontWeight: "bold", color: "salmon" }}>POINT : {this.state.poin}</H1>
                        {(this.state.showpoint) ? <H3 style={styles.plushpoint}>+ {this.state.plushpoint} Point</H3> : <View></View>}
                        <View style={styles.textGame}>


                            <Text style={styles.textCenter2}>Combo Hits : {this.state.combo}</Text>
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
                                {(this.state.pattern === 1) ?
                                    <View style={[styles.btnL1, { marginLeft: 100 }, { backgroundColor: "rgba(235, 183, 69,.4)" }]}>
                                        <View style={[styles.btnD1, { backgroundColor: "rgb(235, 183, 69)" }]}>
                                        </View>
                                    </View> :
                                    <View style={[styles.btnL1, { marginLeft: 100 }]}>
                                        <View style={styles.btnD1}>
                                        </View>
                                    </View>
                                }

                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.sound2.bind(this)}>
                                {(this.state.pattern === 2) ?

                                    <View style={[styles.btnL1, { marginRight: 100 }, { backgroundColor: "rgba(235, 183, 69,.4)" }]}>
                                        <View style={[styles.btnD1, { backgroundColor: "rgb(235, 183, 69)" }]}>
                                        </View>
                                    </View> :
                                    <View style={[styles.btnL1, { marginRight: 100 }]}>
                                        <View style={styles.btnD1}>
                                        </View>
                                    </View>
                                }

                            </TouchableOpacity>
                        </View>
                        {/* btn 2 */}
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: -5 }}>
                            <TouchableOpacity onPress={this.sound3.bind(this)}>
                                {(this.state.pattern === 3) ?
                                    <View style={[styles.btnL2, { marginLeft: 40 }, { backgroundColor: "rgba(235, 183, 69,.4)" }]}>
                                        <View style={[styles.btnD2, { backgroundColor: "rgb(235, 183, 69)" }]}>
                                        </View>
                                    </View> :
                                    <View style={[styles.btnL2, { marginLeft: 40 }]}>
                                        <View style={styles.btnD2}>
                                        </View>
                                    </View>
                                }

                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.sound4.bind(this)}>
                                {(this.state.pattern === 4) ?
                                    <View style={[styles.btnL2, { marginRight: 40 }, { backgroundColor: "rgba(235, 183, 69,.4)" }]}>
                                        <View style={[styles.btnD2, { backgroundColor: "rgb(235, 183, 69)" }]}>
                                        </View>
                                    </View> :
                                    <View style={[styles.btnL2, { marginRight: 40 }]}>
                                        <View style={styles.btnD2}>
                                        </View>
                                    </View>
                                }
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>


            </Container>
        )
    }
}
const mapStateToProp = state => {
    return {
        soundbutton: state.games.soundbutton,
        pattern: state.games.pattern
    }
}

export default connect(mapStateToProp)(Game)
