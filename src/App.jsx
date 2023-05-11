import { Routes, Route } from 'react-router-dom'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SillyThings'
import SoftThings from './pages/SoftThings/SoftThings'
import LoudThings from './pages/LoudThings/LoudThings'
import CoolThings from './pages/CoolThings/CoolThings'
import Landing from './pages/Landing/Landing'

const App = () => {
  const bensThings = [
    {
      name: 'not-orange',
      image:
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      attributes: [
        'potassium-rich',
        'yellow when good',
        'not a taco',
        'ring ring ring ring ring ring ring',
      ],
    },
    {
      name: 'taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'yummy in my tummy',
        'salsas may vary',
        'definitely a taco',
        'very edible',
      ],
    },
    {
      name: 'linux',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['not a taco', 'not Windows', 'not macOS', 'Penguins?'],
    },
  ]

  const davidsThings = [
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ]

  const huntersThings = [
    {
      name: "energy drinks",
      image: "https://imgs.xkcd.com/comics/health_drink_2x.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
  ]

  const seiyoungsThings = [
    {
      name: "yarn",
      image: "https://www.mryarn.com/images/yarn/handmaiden/mini%20maiden_arctic%20sunrise_large.jpg",  
      attributes: ["soft", "pretty", "useful", "let's wreck havoc!"],
    },
  ]

  const andysThings = [
    {
      name: "piano",
      image: "https://imgs.xkcd.com/comics/piano.png",  
      attributes: ["loud", "heavy", "old"],
    },
  ]

  const trentonsThings = [
    {
      name: "cool",
      image: "https://imgs.xkcd.com/comics/cool_s.png",  
      attributes: ["nice", "fun", "lmao"],
    },
  ]

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={bensThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={huntersThings} />}
      />
      <Route 
        path="/the-soft-things"
        element={<SoftThings things={seiyoungsThings} />}
      />
      <Route 
        path="/the-loud-things"
        element={<LoudThings things={andysThings} />}
      />
      <Route 
        path="/the-cool-things"
        element={<CoolThings things={trentonsThings} />}
      />
    </Routes>
  )
}

export default App
