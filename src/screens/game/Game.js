import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail } from 'native-base'

export class Game extends Component {
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
            </Container>
        )
    }
}

export default Game
