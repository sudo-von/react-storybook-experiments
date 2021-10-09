import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './List.styles'

const List = ({ children, direction, spacing, wrap }) => {
    return (
        <div style={styles({ direction, spacing, wrap })}>
            { children.length ? children : 'The list is empty...' }
        </div>
    )
}

List.propTypes = {
    children: PropTypes.any,
    direction: PropTypes.oneOf(['row', 'column']),
    spacing: PropTypes.number,
    wrap: PropTypes.bool
} 

export default List
