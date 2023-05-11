import ThingCard from '../../components/ThingCard/ThingCard'
import { Link } from 'react-router-dom'

const CoolThings = (props) => {
  return (
    <>
      <h1>Trenton's Things</h1>
      <h2>Testing stuff</h2>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  )
}

export default CoolThings