import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery, gql } from '@apollo/client'

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`
function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS)
  const [count, setCount] = useState(0)

  if(loading) return <p>Loading ...</p>
  if(error) return <p>Error: { error.message } </p>

  return data.locations.map(({ id, name, description, photo }) => {
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  })
}

export default App
