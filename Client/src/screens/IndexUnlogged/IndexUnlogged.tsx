import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { useActions } from '../../hooks/useActions';

import { styles } from '../../styles/styles'



export default function IndexUnlogged() {

    const { setIsAuth } = useActions()

    return (
        <View style={styles.screen} >
            <TouchableHighlight onPress={() => setIsAuth(true)}>
                <Text >Test1</Text>
            </TouchableHighlight>
        </View>
    )
}

