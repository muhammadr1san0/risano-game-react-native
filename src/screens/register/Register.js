import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import { styles, } from '../../style/Style'
import { Item, Input, H2, Button } from 'native-base'
import { connect } from 'react-redux'
import { registeruser } from '../../redux/actions/users'



export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            password2: "",
            fullname: "",
            email: ""
        }

    }

    handleRegister = async () => {
        if (this.state.password !== this.state.password2) {
            Alert.alert("Confirm Password not sama")
            return false
        }
        await this.props.dispatch(registeruser({
            username: this.state.username,
            password: this.state.password,
            fullname: this.state.fullname,
            email: this.state.email
        }))
            .then((response) => {
                Alert.alert("Anda Berhasil Register, Silahkan Login")
                this.props.navigation.navigate('Login')
            })
            .catch((err) => {
                console.warn(err)
                Alert.alert("Gagal Register")
            })


    }
    render() {
        return (
            <View style={[styles.flex1]}>
                <View style={[styles.flex1, styles.contentCenter, styles.itemCenter]}>
                    <H2>Form Register </H2>
                </View>
                <View style={styles.flex5}>

                    <Item regular style={styles.borderInput}>
                        <Input placeholder='Username' onChangeText={(username) => this.setState({ username })} value={this.state.username} />
                    </Item>
                    <Item regular style={styles.borderInput}>
                        <Input placeholder='Password' secureTextEntry={true} onChangeText={(password) => this.setState({ password })} value={this.state.password} />
                    </Item>
                    <Item regular style={styles.borderInput}>
                        <Input placeholder='Confirm Password' secureTextEntry={true} onChangeText={(password2) => this.setState({ password2 })} value={this.state.password2} />
                    </Item>
                    <Item regular style={styles.borderInput}>
                        <Input placeholder='Full Name' onChangeText={(fullname) => this.setState({ fullname })} value={this.state.fullname} />
                    </Item>
                    <Item regular style={styles.borderInput}>
                        <Input placeholder='email' onChangeText={(email) => this.setState({ email })} value={this.state.email} />
                    </Item>

                    <Button block style={{ marginTop: 30, width: "90%", marginLeft: "auto", marginRight: "auto" }} onPress={this.handleRegister}>
                        <Text style={styles.textWhite}>Register</Text>
                    </Button>
                    <Button block warning style={{ marginTop: 10, width: "90%", marginLeft: "auto", marginRight: "auto" }}>
                        <Text style={styles.textWhite}>Cancel</Text>
                    </Button>
                </View>
            </View >
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
export default connect(mapStateToProps)(Register)
