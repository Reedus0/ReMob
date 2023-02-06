import { StyleSheet } from 'react-native';

export const promptStyles = StyleSheet.create({
    prompt: {
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    prompt__inner: {
        borderRadius: 10,
        width: '85%',
        position: 'relative',
        padding: 15,
        backgroundColor: '#ffffff',
    },
    prompt__close: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
    prompt__title: {
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 22,
        fontWeight: '700'
    },
    prompt__text: {
        fontSize: 16
    }
})