import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, H3 } from 'native-base';
import { styles } from '../../style/Style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { fasFaArrowRight } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

export class Login extends Component {
    render() {
        return (
            <Container>
                <View style={styles.flex3}>

                </View>
                <View style={[styles.flex2, styles.fluid, styles.contentCenter]}>
                    <View>
                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                        </Form>
                    </View>
                </View>
                <View style={[styles.flex1, styles.fluid, styles.contentCenter, styles.textLeftRight]}>
                    <View style={{ width: 200, marginTop: 10 }}><H3>Login</H3></View>
                    <View style={{ width: 60 }}>
                        <Button info style={[styles.RoundButton, styles.textCenter]}>
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} size={30} color="white" />
                        </Button>
                    </View>
                </View>

                <View style={[styles.flex1, styles.fluid, styles.contentCenter, styles.textLeftRight, { alignItems: "flex-end" }]}>
                    <Text style={styles.mb20}> Sign Up</Text><Text style={styles.mb20}>Forgot Password</Text>
                </View>
            </Container >
        )
    }
}

export default Login
