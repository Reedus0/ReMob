import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Prompt from '../../components/Prompt/Prompt'
import { useActions } from '../../hooks/useActions'
import { styles } from '../../styles/styles'

export default function IndexLogged() {

    const { setPrompt } = useActions()


    return (
        <View style={styles.screen} >
            <TouchableHighlight onPress={() => setPrompt(<Prompt title="Test" ></Prompt>)}>
                <Text>Test</Text>

            </TouchableHighlight>
        </View>
    )
}
