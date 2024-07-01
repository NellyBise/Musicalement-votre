import App from './App.jsx'
import Home from '../src/pages/Home.jsx'
import Presentation from '../src/pages/Presentation.jsx'
import Prestations from './pages/Prestations.jsx'
import Material from './pages/Material.jsx'
import Medias from './pages/Medias.jsx'
import Music from './components/Music.jsx'
import Videos from './components/Videos.jsx'
import Photos from './components/Photos.jsx'

import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', index: true, element: <Home /> },
      { path: 'apropos', element: <Presentation /> },
      {
        path: 'prestations',
        element: <Prestations />,
      },
      { path: 'materiel', element: <Material /> },
      {
        path: 'mediatheque',
        element: <Medias />,
        children: [
          {
            path: 'photos',
            element: <Photos />,
          },
          {
            path: 'musique',
            element: <Music />,
          },
          {
            path: 'videos',
            element: <Videos />,
          },
        ],
      },
    ],
  },
])

export default Router
