import React from 'react'
import FormInput from "../components/forms/FormInput"
import * as sc from "../components/forms/styled-components"

export const Login = () => {
    return (
        <sc.Page>
            <sc.Title>Hackathon</sc.Title>
            <sc.Form>
                <sc.FormInputBand>
                    <FormInput name={"username"}/>
                    <FormInput name={"password"} hidden={true}/>                
                </sc.FormInputBand>
                <sc.submitButton type="submit">
                Log in!
                </sc.submitButton>
            </sc.Form>
            <sc.Text>New to the hackathon? <sc.Link href="/signup">Sign up.</sc.Link></sc.Text>
        </sc.Page>
    )
}
