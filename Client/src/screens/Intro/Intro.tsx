import React from 'react'
import { Text, View, Image } from 'react-native'
import Button from '../../components/Button/Button'
import { styles } from '../../styles/styles'
import { introStyles } from './styles'

export default function Intro(props: any) {
  return (
    <View style={styles.screen} >
      <View style={introStyles.intro__wrapper} >
        <View style={introStyles.intro__inner}>
          <View style={introStyles.intro__imageWrapper}>
            <Image style={introStyles.intro__image} source={{ uri: 'https://raw.githubusercontent.com/Reedus0/ReMob/master/Client/src/img/iconBig.png' }} />
          </View>
          <Text style={introStyles.intro__text}>Приложение для дистационного управления роботом</Text>
          <Button title='Начать' onPress={() => props.navigation.navigate('IndexUnlogged')} />
        </View>
      </View>
    </View>
  )
}
