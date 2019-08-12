import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles, } from '../../style/Style'
import { Item, Input, H2, Button } from 'native-base'

export class Register extends Component {
    render() {
        return (
            <View style={[styles.flex1]}>
                <View style={[styles.flex1, styles.contentCenter]}>
                    <H2>Form Register </H2>
                </View>
                <View style={styles.flex5}>

                    <Item regular style={styles.borderInput}>
                        <Input placeholder='Username' />
                    </Item>
                    <Item regular style={styles.borderInput}>
                        <Input placeholder='Password' secureTextEntry={true} />
                    </Item>
                    <Item regular style={styles.borderInput}>
                        <Input placeholder='Confirm Password' secureTextEntry={true} />
                    </Item>
                    <Item regular style={styles.borderInput}>
                        <Input placeholder='Full Name' />
                    </Item>
                    <Item regular style={styles.borderInput}>
                        <Input placeholder='email' />
                    </Item>

                    <Button block style={{ marginTop: 30, width: "90%", marginLeft: "auto", marginRight: "auto" }}>
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

export default Register
