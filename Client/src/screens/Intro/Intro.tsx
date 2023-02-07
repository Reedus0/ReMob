import React from 'react'
import { Text, View, Image } from 'react-native'
import Button from '../../components/Button/Button'
import { styles } from '../../styles/styles'
import { introStyles } from './styles'

export default function Intro() {
  return (
    <View style={styles.screen} >
      <Image style={introStyles.intro__image} source={require('./../../img/iconBig')}/>
        <Text style={introStyles.intro__text}>Приложение для дистационного управления роботом</Text>
        <Button title='Button' onPress={() => null}/>
    </View>
  )
}
