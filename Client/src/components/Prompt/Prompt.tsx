import { Button, Text, TouchableOpacity, View } from 'react-native'
import { useActions } from '../../hooks/useActions'
import { promptStyles } from './styles'

export default function Prompt(props: any) {

    const { setPrompt } = useActions()

    return (
        <TouchableOpacity style={promptStyles.prompt} onPress={() => setPrompt(<></>)}>
            <TouchableOpacity style={promptStyles.prompt__inner} onPress={(e) => e.stopPropagation()} >
                <TouchableOpacity style={promptStyles.prompt__close} onPress={() => setPrompt(<></>)} >
                    <Text >&#10006;</Text>
                </TouchableOpacity>
                <View >
                    <Text style={promptStyles.prompt__title} >{props.title}</Text>
                    <View >
                        <Text style={promptStyles.prompt__text} >{props.children}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
