import React, { FC } from 'react'
import { Stack } from '../../App';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, IRoute, publicRoutes } from '../router'

const AppRouter: FC = () => {

  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {isAuth
        ?
        privateRoutes.map((route: IRoute) =>
          <Stack.Screen component={route['element']} name={route['name']} key={route['name']}  />
        )
        :
        publicRoutes.map((route: IRoute) =>
          <Stack.Screen component={route['element']} name={route['name']} key={route['name']}  />
        )
      }
    </Stack.Navigator>
  )
}

export default AppRouter
