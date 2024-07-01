import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function LinkCard(props) {
  return (
    <Link
      to={props.link}
      className="w-1/3 h-96 overflow-hidden rounded-xl bg-white drop-shadow-xl hover:scale-105 duration-300"
    >
      <div className="h-full">
        <img src={props.image} alt="" className="w-full h-2/3 object-cover" />
        <div className="h-1/3 w-full text-main-color text-xl px-4 flex items-center justify-center">
          {props.text}
        </div>
      </div>
    </Link>
  )
}

LinkCard.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
