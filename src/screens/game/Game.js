import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, Alert } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Subtitle, H1, H2, H3 } from 'native-base'
import { styles } from '../../style/Style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { soundbutton } from '../../redux/actions/games';
import { getpattern } from '../../redux/actions/games'
import { insertscore } from '../../redux/actions/leaderboards';
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
            showpoint: false,
            informasi: 3
        }
    }

    addpoint = () => {
        this.setState({
            poin: this.state.poin + this.state.plushpoint,
            activepoint: false,
            showpoint: true,
            pattern: null
        })
    }
    sound1 = () => {
        console.warn(this.props.id_user)
        this.state.button1.stop(() => {
            this.state.button1.play();
        });
        if (this.state.pattern === 1) {
            if (this.state.activepoint) {
                this.addpoint()
            }
        } else {
            Alert.alert("anda Kalah")
            this.savePoint()
        }

    }
    sound2 = () => {
        this.state.button2.stop(() => {
            this.state.button2.play();
        });
        if (this.state.pattern === 2) {
            if (this.state.activepoint) {
                this.addpoint()
            }
        } else {
            Alert.alert("anda Kalah")
            this.savePoint()
        }
    }
    sound3 = () => {
        this.state.button3.stop(() => {
            this.state.button3.play();
        });
        if (this.state.pattern === 3) {
            if (this.state.activepoint) {
                this.addpoint()
            }
        } else {
            Alert.alert("anda Kalah")
            this.savePoint()
        }
    }
    sound4 = () => {
        this.state.button4.stop(() => {

            this.state.button4.play();
        });
        if (this.state.pattern === 4) {
            if (this.state.activepoint) {
                this.addpoint()
            }
        } else {
            Alert.alert("anda Kalah")
            this.savePoint()
        }

    }
    savePoint = async () => {
        this.stopTimeout()
        await this.props.dispatch(insertscore({
            id_user: this.props.id_user,
            score: this.state.poin
        }))
            .then((res) => {
                this.props.navigation.navigate('Leaderboards')
            })
            .catch((err) => {
                console.warn(err)
                alert("Maff Ada masalah server Point tidak tersimpan")
            })
    }
    stopTimeout = () => {
        clearTimeout(timecombo);
        clearTimeout(timepattern);
    }
    startInfo = () => {
        this.setState({
            informasi: 3
        })
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => {
                this.setState({
                    informasi: this.state.informasi - 1
                })
            }, i * 400)
        }
        setTimeout(() => {
            this.setState({
                informasi: "Go !!!"
            })
        }, 1800)
        setTimeout(() => {
            this.setState({
                informasi: null
            })
        }, 2900)

    }

    startPettern = async () => {
        this.startInfo();
        await this.props.dispatch(getpattern())
            .then((res) => {
                // console.warn(this.props.pattern)
                if (this.props.pattern) {

                    let lengthdelay = 3000
                    lengthcombo = this.props.pattern.length
                    this.props.pattern.map((item) => {
                        let delay = item.delay
                        let chilpattern = item.pattern.split("")
                        chilpattern.push(0)
                        timecombo = setTimeout(() => {
                            this.setState({
                                plushpoint: item.plushpoint
                            })

                            chilpattern.map((item2, index) => {
                                timepattern = setTimeout(() => {
                                    if (item2 === 0) {
                                        this.setState({
                                            combo: this.state.combo + 1
                                        })
                                        if (!this.props.id_user) {
                                            Alert.alert("You Should Login")
                                            this.stopTimeout()
                                            delay = 0
                                            lengthdelay = 0
                                            chilpattern = null
                                            this.props.navigation.navigate('Login')
                                            return false

                                        }
                                        if (parseInt(this.state.combo) === parseInt(lengthcombo)) {
                                            Alert.alert("Game Selesai")
                                            this.savePoint()
                                        }

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

    // componentDidUpdate = () => {
    //     this.startPettern()
    // }
    // componentWillReceiveProps = () => {

    // }
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
                //Here is the Trick
                const { navigation } = this.props;
                this.focusListener = navigation.addListener('didFocus', () => {
                    this.setState({
                        pattern: null,
                        buttonNumber: null,
                        poin: 0,
                        activepoint: false,
                        combo: 0,
                        plushpoint: null,
                        showpoint: false
                    });
                    this.startPettern()

                });

            })
            .catch((err) => {
                console.warn(err)
                Alert.alert("Program Bermasalah coba ulangi lagi")
            })
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
                        <H2 style={styles.totalpoint}>POINT : {this.state.poin}</H2>
                        {(this.state.showpoint) ? <H3 style={styles.plushpoint}>+ {this.state.plushpoint} Point</H3> : <View></View>}
                        <View style={styles.textGame}>
                            {(this.state.informasi) ?
                                <Text style={styles.info}>{this.state.informasi}</Text> :
                                <View></View>
                            }
                            <Text style={[styles.textCenter2, { marginTop: 30 }]}>Combo Hits : {this.state.combo}</Text>
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
        pattern: state.games.pattern,
        id_user: state.users.id_user,
        token: state.users.token

    }
}

export default connect(mapStateToProp)(Game)
