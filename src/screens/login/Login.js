import React, { Component } from 'react'
import { Text, View, Alert, AsyncStorage, Image } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, H3, H2 } from 'native-base';
import { styles } from '../../style/Style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { fasFaArrowRight } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions/users'


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleLogin = async () => {
        await this.props.dispatch(loginUser({
            username: this.state.username,
            password: this.state.password
        }))
            .then((response) => {
                AsyncStorage.setItem('token', response.action.payload.data.result.token.toString())
                AsyncStorage.setItem('id_user', response.action.payload.data.result.id_user.toString())
                AsyncStorage.setItem('role_id', response.action.payload.data.result.role_id.toString())
                AsyncStorage.setItem('fullname', response.action.payload.data.result.fullname.toString())
                Alert.alert("Login Berhasil")
                this.props.navigation.navigate('Home')
            })
            .catch((err) => {
                console.warn(err)
                Alert.alert("Gagal Login")
            })



    }

    render() {
        return (
            <ScrollView>
                <Container>
                    <View style={styles.flex3}>
                        <Image source={require('../../assets/images/iconsayaa.png')} style={{ marginTop: 70, marginLeft: 50, width: 300, height: 100 }} />
                        <H2 style={{ marginLeft: "auto", marginRight: "auto", marginTop: 30, color: "orange" }}>Login Here</H2>
                    </View>
                    <View style={[styles.flex2, styles.fluid, styles.contentCenter]}>
                        <View>

                            <Form>
                                <Item floatingLabel>
                                    <Label>Username</Label>
                                    <Input onChangeText={(username) => this.setState({ username })} value={this.state.username} />
                                </Item>
                                <Item floatingLabel last>
                                    <Label>Password</Label>
                                    <Input secureTextEntry={true} onChangeText={(password) => this.setState({ password })} value={this.state.password} />
                                </Item>
                            </Form>
                        </View>
                    </View>
                    <View style={[styles.flex1, styles.fluid, styles.contentCenter, styles.textLeftRight]}>
                        <View style={{ width: 200, marginTop: 10, }}><H3>Login</H3></View>
                        <View style={{ width: 60 }}>
                            <Button info style={[styles.RoundButton, styles.textCenter]} onPress={() => this.handleLogin()}>
                                <FontAwesomeIcon icon={['fas', 'arrow-right']} size={30} color="white" />
                            </Button>
                        </View>
                    </View>


                    <View style={[styles.flex1, styles.fluid, styles.contentCenter, styles.textLeftRight, { alignItems: "flex-end" }]}>
                        <Text style={[styles.mb20, { color: "grey" }]} onPress={() => this.props.navigation.navigate('Register')}> Sign Up</Text><Text style={[styles.mb20, { color: "grey" }]} onPress={() => this.props.navigation.navigate('Home')}>Back Home</Text>
                    </View>
                </Container>
            </ScrollView>
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

export default connect(mapStateToProps)(Login)
