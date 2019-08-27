import React, { Component } from 'react'
import { Text, View, Alert, ImageBackground, Image } from 'react-native'
import { styles, } from '../../style/Style'
import { Item, Input, H2, H1, H3, Button, Header, Left, Right, Thumbnail } from 'native-base'
import { connect } from 'react-redux'
import { registeruser } from '../../redux/actions/users'
import { text } from '@fortawesome/fontawesome-svg-core';



export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }


    render() {
        return (
            <ImageBackground source={require('../../assets/images/backhome.png')} style={{ width: '100%', height: '100%', flex: 1 }}>
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

                <View style={[styles.flex1, styles.contentCenter, styles.textCenter]}>
                    <H1 style={{ color: "orange", fontWeight: "bold", textAlign: "center", fontSize: 35, }}>WELCOME</H1>
                    <H1 style={{ color: "salmon", fontSize: 25, marginTop: 10 }}>Titak-titak Dididing</H1>
                </View>
                <View style={styles.flex1}>
                    <Image style={styles.contentCenter} source={require('../../assets/images/iconsayaa.png')}
                    />
                </View>
                <View style={[styles.flex2, { padding: 20 }]}>
                    <View style={styles.containerbtn}>
                        <Button style={styles.mb5} block warning onPress={() => this.props.navigation.navigate('Game')}>
                            <Text style={styles.btnhome}>Play Game</Text>
                        </Button>
                        <Button style={styles.mb5} block warning onPress={() => this.props.navigation.navigate('Leaderboards')}>
                            <Text style={styles.btnhome}>Leaderboard</Text>
                        </Button>
                        {(!this.props.id_user) ?
                            <Button style={styles.mb5} block warning onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={styles.btnhome}>Login</Text>
                            </Button> :
                            <Button style={styles.mb5} block dark>
                                <Text style={[styles.btnhome, { color: "grey" }]}>Login</Text>
                            </Button>}
                        {(!this.props.id_user) ?
                            <Button style={styles.mb5} block warning onPress={() => this.props.navigation.navigate('Register')}>
                                <Text style={styles.btnhome}>Register</Text>
                            </Button> :
                            <Button style={styles.mb5} block dark>
                                <Text style={[styles.btnhome, { color: "grey" }]}>Register</Text>
                            </Button>
                        }
                    </View>
                </View>
            </ImageBackground>
        )
    }
}


const mapStateToProps = state => {
    return {
        token: state.users.token,
        id_user: state.users.id_user,
        role_id: state.users.role_id,
        username: state.users.username,
        fullname: state.users.fullname
    }
}
export default connect(mapStateToProps)(Home)
