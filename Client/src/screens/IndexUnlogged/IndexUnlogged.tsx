import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Prompt from '../../components/Prompt/Prompt'
import { useActions } from '../../hooks/useActions'
import { styles } from '../../styles/styles'

export default function IndexUnlogged() {

    const { setPrompt } = useActions()

    return (
        <View style={styles.screen} >
            <TouchableHighlight onPress={() => setPrompt(<Prompt title="Test" >asadasdasdasd</Prompt>)}>
                <Text>Test</Text>

            </TouchableHighlight>
        </View>
    )
}

