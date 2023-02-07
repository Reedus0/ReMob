import { StyleSheet } from 'react-native';

export const introStyles = StyleSheet.create({
    intro__wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    intro__inner: {
        width: '100%',
        paddingBottom: '15%'
    },
    intro__text: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.7)',
        textAlign: 'center',
        width: '80%',
        marginLeft: '10%',
        lineHeight: 17,
        marginTop: 10,
        marginBottom: 20
    },
    intro__image: {
        width: 165,
        height: 165,
        textAlign: 'center'
    },
    intro__imageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})