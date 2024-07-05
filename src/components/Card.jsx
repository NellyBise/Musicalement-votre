import PropTypes from 'prop-types'

export default function Card(props) {
  return (
    <div className="bg-light-blue w-1/3 h-full flex flex-col justify-center overflow-hidden rounded-xl drop-shadow-xl">
      <div className="h-72 w-full flex justify-center items-center">
        <img
          src={props.image}
          alt=""
          className="max-h-72 w-full object-contain"
        />
      </div>
      {props.text}
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
