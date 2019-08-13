import React, { Component } from 'react'
import { styles } from '../../style/Style'
import { Content, List, ListItem, Container, Header, Left, Body, Right, Title, Subtitle, Button, Icon, Text, View, Thumbnail, uri } from 'native-base';
import Leaderboard from 'react-native-leaderboard';

export class Leaderboards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { userName: 'Joe', highScore: 52 },
                { userName: 'Jenny', highScore: 120 },
            ]

        }
    }
    componentDidMount = () => {

    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#eee' }}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body style={{ justifyContent: "center" }}>
                        <Title style={{ color: "grey" }}>Leader Boards</Title>
                    </Body>

                </Header>


                <View style={styles.kotakleader}>
                    <View style={styles.boxLeft}>
                        <Text style={styles.textWhiteb}>RANK</Text>
                        <Text style={styles.textWhiteb}>100</Text>
                    </View>
                    <View style={styles.boxCenter}>
                        <Thumbnail source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
                        <Text style={styles.textWhite}>dhehads</Text>
                    </View>
                    <View style={styles.boxRight}>

                        <Text style={styles.textWhiteb}>
                            POINT
                        </Text>
                        <Text style={styles.textWhiteb}>
                            1999
                        </Text>
                    </View>
                </View>
                <View style={[styles.fluid, styles.contentCenter, styles.mt20]}>
                    {/* <Content style={{ marginTop: 30 }}> */}
                    <Leaderboard
                        data={this.state.data}
                        sortBy='highScore'
                        labelBy='userName' />
                    {/* </Content> */}
                </View>

                {/* <Content style={{ marginTop: 30 }}>
                    <List>
                        <ListItem selected>
                            <Left style={{ width: 3 }}>
                                <Text style={styles.numlist}>1</Text>
                                <Thumbnail small source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} style={styles.mimg} />
                                <Text>Muhammad Risano</Text>
                            </Left>
                            <Right>
                                <Text>10000k</Text>
                            </Right>
                        </ListItem>
                        <ListItem selected>
                            <Left style={{ width: 3 }}>
                                <Text style={styles.numlist}>2</Text>
                                <Thumbnail small source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} style={styles.mimg} />
                                <Text>Muhammad Risano</Text>
                            </Left>
                            <Right>
                                <Text>10000k</Text>
                            </Right>
                        </ListItem>
                        <ListItem selected>
                            <Left style={{ width: 3 }}>
                                <Text style={styles.numlist}>3</Text>
                                <Thumbnail small source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} style={styles.mimg} />
                                <Text>Muhammad Risano</Text>
                            </Left>
                            <Right>
                                <Text>10000k</Text>
                            </Right>
                        </ListItem>
                        <ListItem selected>
                            <Left style={{ width: 3 }}>
                                <Text style={styles.numlist}>4</Text>
                                <Thumbnail small source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} style={styles.mimg} />
                                <Text>Muhammad Risano</Text>
                            </Left>
                            <Right>
                                <Text>10000k</Text>
                            </Right>
                        </ListItem>
                        <ListItem selected>
                            <Left style={{ width: 3 }}>
                                <Text style={styles.numlist}>5</Text>
                                <Thumbnail small source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} style={styles.mimg} />
                                <Text>Muhammad Risano</Text>
                            </Left>
                            <Right>
                                <Text>10000k</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content> */}
            </Container>
        )
    }
}

export default Leaderboards
