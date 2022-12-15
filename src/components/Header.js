import PropTypes from 'prop-types'


const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <button className='btn'>Add</button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS 
//-if you don't want to do inline styling, you could 
//create a variable and pass in headingStyle into style={headingStyle}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }






export default Header
