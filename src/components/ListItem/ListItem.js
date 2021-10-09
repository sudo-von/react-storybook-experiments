import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ label }) => {
    return (
        <div>
            {label}
        </div>
    )
}

ListItem.propTypes = {
    label: PropTypes.string
} 

export default ListItem
