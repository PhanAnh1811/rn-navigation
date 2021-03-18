import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'

const LoginScreen = ({navigation}) => {
    return (
        <View>
            <Button
             onPress={()=>{navigation.navigate('Home')}}
             title='SIGN IN'
             />
             <Button
             onPress={()=>{navigation.navigate('SignUp')}}
             title='SIGN UP'
             />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
