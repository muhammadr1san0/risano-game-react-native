import React, { Component } from 'react'
import { styles } from '../../style/Style'
import { Content, List, ListItem, Container, Header, Left, Body, Right, Title, Subtitle, Button, Icon, Text, View, Thumbnail, uri } from 'native-base';

export class Leaderboards extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body style={{ justifyContent: "center" }}>
                        <Title>Leader Boards</Title>
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

                <Content style={{ marginTop: 30 }}>
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
                </Content>
            </Container>
        )
    }
}

export default Leaderboards
