import React, { Component } from 'react'
import { styles } from '../../style/Style'
import { Content, List, ListItem, Container, Header, Left, Body, Right, Title, Subtitle, Button, Icon, Text, View, Thumbnail, uri } from 'native-base';
import { ActivityIndicator } from 'react-native'
import Leaderboard from 'react-native-leaderboard';
import { getLeaderboard } from '../../redux/actions/leaderboards'
import { connect } from 'react-redux'

export class Leaderboards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true

        }
    }
    componentDidMount = async () => {

        await this.props.dispatch(getLeaderboard())
            .then((response) => {
                this.setState({
                    data: this.props.leaderboard,
                    loading: false
                })
            })
            .catch((err) => {
                console.warn(err)
            })
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

                {(this.state.loading) ? <ActivityIndicator size="large" color="#0000ff" /> : <View></View>}
                <View style={[styles.fluid, styles.contentCenter, styles.mt20]}>
                    {/* <Content style={{ marginTop: 30 }}> */}
                    <Leaderboard
                        data={this.state.data}
                        sortBy='score'
                        labelBy='username' />
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
const mapStateToPops = state => {
    return {
        leaderboard: state.leaderboards.leaderboard
    }
}

export default connect(mapStateToPops)(Leaderboards)
