import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Text } from 'react-native'
import { buttonStyles } from './styles'



export default function Button(props: {title: string, onPress: () => void}) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress} style={buttonStyles.button__wrapper}>
        <Text style={buttonStyles.button__title}>{props.title}</Text>
    </TouchableWithoutFeedback>
  )
}


