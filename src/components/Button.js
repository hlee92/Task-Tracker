import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
    const onClick = () => {
}    
  return (
    <button 
        onClick={onClick} 
        style={{ backgroundColor: color }} 
        className='btn'
    >
        {text}
    </button>
)
}


Button.default.Props = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}




export default Button
