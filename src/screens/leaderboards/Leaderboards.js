import React, { Component } from 'react'
import { styles } from '../../style/Style'
import { Content, List, ListItem, Container, Header, Left, Body, Right, Title, Subtitle, Button, Icon, Text, View, Thumbnail, uri } from 'native-base';
import { ActivityIndicator } from 'react-native'
import Leaderboard from 'react-native-leaderboard';
import { getLeaderboard, getLeaderboarduser } from '../../redux/actions/leaderboards'
import { connect } from 'react-redux'

export class Leaderboards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            rank: "",
            point: "",
            username: "",

        }
    }

    getLeaderboarduser = async () => {
        await this.props.dispatch(getLeaderboarduser(this.props.id_user))
            .then((result) => {
                console.log(this.props.leaderuser[0])
                this.setState({
                    rank: this.props.rank,
                    point: this.props.leaderuser[0].score,
                    username: this.props.leaderuser[0].username

                })
            })
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
        this.getLeaderboarduser()
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
                        <Text style={styles.textWhiteb}>{this.state.rank}</Text>
                    </View>
                    <View style={styles.boxCenter}>
                        <Thumbnail source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
                        <Text style={styles.textWhite}>{this.state.username}</Text>
                    </View>
                    <View style={styles.boxRight}>

                        <Text style={styles.textWhiteb}>
                            POINT
                        </Text>
                        <Text style={styles.textWhiteb}>
                            {this.state.point}
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

            </Container>
        )
    }
}
const mapStateToPops = state => {
    return {
        leaderboard: state.leaderboards.leaderboard,
        leaderuser: state.leaderboards.leaderuser,
        rank: state.leaderboards.rank,
        id_user: state.users.id_user
    }
}

export default connect(mapStateToPops)(Leaderboards)
