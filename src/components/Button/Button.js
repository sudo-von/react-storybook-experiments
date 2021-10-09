import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './Button.styles'

const Button = ({ backgroundColor, color, label, size, handleClick }) => {

    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5

    return (
        <button 
            style={styles({ scale, color, backgroundColor })}
            onClick={handleClick}
        >
            { label }
        </button>
    )
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    handleClick: PropTypes.func
} 


export default Button