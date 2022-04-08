// Write your code here
import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data
  return (
    <div className="planets-list">
      <h1 className="heading">Planets</h1>

      <img className="img-el" src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
