import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer, DrawerItems, SafeAreaView } from 'react-navigation'
import { View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import { H3, Container, Content, Header, Body, Icon, List, ListItem, Left, Right, Thumbnail } from 'native-base'
import { styles } from '../style/Style'
class CustomsDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card_number: null,
            fullname: null,
            id_user: null,
            role_id: null,
            token: null
        };

    }



    render() {
        return (
            <Container>
                <Header style={{ height: 300, alignItems: 'center', backgroundColor: "#eee" }}>
                    <Body>
                        <View style={styles.photoDrawer}>
                            <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                                style={{ width: 140, height: 140, resizeMode: "cover", borderRadius: 70 }} />
                        </View>
                        <View style={[styles.textCenter, { width: "100%", justifyContent: "center", marginTop: 20 }]}>
                            <Text style={{ textAlign: "center" }}>Muhammad Risano Akbar</Text>
                            <Text style={{ textAlign: "center" }}> wow wefas wer</Text>
                            <Text style={{ textAlign: "center" }}> Jakarta</Text>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <View>
                            <ListItem onPress={() => this.props.navigation.navigate('Leaderboards')}>
                                <Left>
                                    <Image source={require('../assets/images/mahkota2.png')} style={{ width: 30, height: 30, marginRight: 10, marginTop: -5 }} />
                                    <Text>LeaderBoards</Text>
                                </Left>
                            </ListItem>
                        </View>

                    </List>
                </Content>
            </Container >
        );
    }
}


export default CustomsDrawer;





