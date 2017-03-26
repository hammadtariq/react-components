import React from 'react';
import Home from './dashboard/home/home'
import About from './dashboard/about/about'
import Topics from './dashboard/topics/topics'

const routesList = [
  { path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Home />
  },
  { path: '/bubblegum',
    sidebar: () => <div>About!</div>,
    main: () => <About/>
  },
  { path: '/shoelaces',
    sidebar: () => <div>Contact us</div>,
    main: () => <Topics />
  }
]

export default routesList;
