import React from 'react';
import IndexLogged from '../screens/IndexLogged/IndexLogged';
import IndexUnlogged from '../screens/IndexUnlogged/IndexUnlogged';
import Intro from '../screens/Intro/Intro';


export interface IRoute {
  name: string;
  element: any;
}

export const privateRoutes: IRoute[] = [
  { name: "IndexLogged", element: IndexLogged },

]

export const publicRoutes: IRoute[] = [
  { name: "IndexUnlogged", element: IndexUnlogged },
  { name: "Intro", element: Intro },

]


