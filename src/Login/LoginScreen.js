//here we validate username and email

import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
export const LoginScreen = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
    }, [])

    let validateform = (callback) => {
        let flag = true
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if (username.length < 10) {
            flag = false
            alert("Enter valid usename")
        } else if (reg.test(email)) {
            flag = true
        } else {
            flag = false
            alert("Enter valid email")
        }

        callback(flag)
    }

    const _validation = () => {
        validateform((flag) => {
            if (flag) {
                props.navigation.navigate('ImageuploadScreen')
            }
        })
    }

    return (
        <View style={{ flex: 1, }}>
            <View style={styles.Header}>
                <Text style={styles.loginText}>Welcome</Text>
            </View>

            <View style={styles.UsernameView}>
                <TextInput
                    placeholder='Enter Name'
                    placeholderTextColor={'gray'}
                    value={username}
                    editable={true}
                    onChangeText={(text) => {
                        setUsername(text)
                    }}
                    style={{
                        paddingLeft: 15,
                        color: '#000',
                    }}
                />
            </View>

            <View style={styles.UsernameView}>
                <TextInput
                    placeholder='Enter Email'
                    placeholderTextColor={'gray'}
                    value={email}
                    editable={true}
                    onChangeText={(text) => {
                        setEmail(text)
                    }}
                    style={{
                        paddingLeft: 15,
                        color: '#000',
                    }}
                />
            </View>
            <View style={styles.ButtonView}>
                <TouchableOpacity onPress={() => _validation()}>
                    <Text style={styles.LoginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        alignItems: 'center',
        marginTop: '50%'
    },
    loginText: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 40
    },
    UsernameView: {
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 20,
        marginEnd: 20,
        borderRadius: 20,
        marginVertical: 20
    },
    ButtonView: {
        backgroundColor: 'red',
        width: '50%',
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    LoginButtonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }

});
