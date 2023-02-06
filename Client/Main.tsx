import React from 'react'
import AppRouter from './src/components/AppRouter';
import { useTypedSelector } from './src/hooks/useTypedSelector';

export default function Main() {

    const { prompt } = useTypedSelector(state => state.prompt);

    return (
        <>
            {prompt}
            <AppRouter />
        </>
    )
}
