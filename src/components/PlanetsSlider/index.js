// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div testid="planets" className="main-bg-container">
      <Slider {...settings}>
        {planetsList.map(eachData => (
          <PlanetItem data={eachData} key={eachData.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
