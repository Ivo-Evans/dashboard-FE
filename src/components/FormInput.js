import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
    border: 0;
    border-bottom: 3px solid #FFF;
    background-color: rgba(0, 0, 0, 0);
    font-size: 1.25em;
    max-width: 200px;
`

const FormInput = ({name, hidden}) => {
    return (
        <Input placeholder={name} aria-label={name} type={hidden && "password"} />
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
