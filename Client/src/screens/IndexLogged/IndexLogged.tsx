import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { useActions } from '../../hooks/useActions'
import { styles } from '../../styles/styles'

export default function IndexLogged(props: any) {

    const { setIsAuth } = useActions() 

    return (
        <View style={styles.screen} >
            <TouchableHighlight onPress={() => setIsAuth(false)}>
                <Text >Test2</Text>
            </TouchableHighlight>
        </View>
    )
}
