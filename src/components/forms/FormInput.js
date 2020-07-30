import React from 'react'
import PropTypes from 'prop-types'
import * as sc from "./styled-components"



const FormInput = ({name, hidden, onChange}) => {
    return (
        <sc.Input placeholder={name} aria-label={name} type={hidden && "password"} onChange={onChange}/>
    )
}

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    hidden: PropTypes.bool
}

FormInput.defaultProps = {
    hidden: false
}

export default FormInput
