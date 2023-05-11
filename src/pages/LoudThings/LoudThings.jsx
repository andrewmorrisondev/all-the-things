import ThingCard from '../../components/ThingCard/ThingCard'
import { Link } from 'react-router-dom'

const LoudThings = (props) => {
  return (
    <>
      <h1>andy's Things</h1>
      <h2>test-test</h2>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  )
}

export default LoudThings