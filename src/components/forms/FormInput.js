import React from 'react'
import PropTypes from 'prop-types'
import * as sc from "./styled-components"



const FormInput = ({name, hidden}) => {
    return (
        <sc.Input placeholder={name} aria-label={name} type={hidden && "password"} />
    )
}

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    hidden: PropTypes.bool
}

FormInput.defaultProps = {
    hidden: false
}

export default FormInput
