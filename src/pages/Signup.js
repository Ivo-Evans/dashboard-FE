import React from 'react'
import FormInput from "../components/forms/FormInput"
import * as sc from "../components/forms/styled-components"

export const Signup = () => {
    return (
        <sc.Page>
            <sc.Title>Hackathon</sc.Title>
            <sc.Form>
                <sc.FormInputBand>
                    <FormInput name={"username"}/>
                    <FormInput name={"email"} />                
                </sc.FormInputBand>
                <sc.FormInputBand>
                    <FormInput name={"password"} hidden={true}/>
                    <FormInput name={"confirm password"} hidden={true}/>                
                </sc.FormInputBand>
                <sc.submitButton type="submit">
                Register!
                </sc.submitButton>
            </sc.Form>
        </sc.Page>
    )
}
