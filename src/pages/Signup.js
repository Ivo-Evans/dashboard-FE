import React from 'react'
import FormInput from "../components/forms/FormInput"
import * as sc from "../components/forms/styled-components"
import { useHistory } from "react-router-dom"
import fetchJSON from "../utils/fetchJSON"
import * as urls from "../variables/urls"

export const Signup = () => {
    const history = useHistory();
    const [username, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [passwordTwo, setPasswordTwo] = React.useState("")
    const [error, setError] = React.useState("")

    const handleSubmission = (event) => {
        event.preventDefault()
        setError("")
        const formData = {username, password, email}
        if (password !== passwordTwo) {
            setError("The passwords must match")
        }
        fetchJSON({
            url: urls.backend,
            endpoint: "/signup",
            method: "POST",
            data: formData,
        })
        .then(res => {
            localStorage.setItem("JWT", res.token)
            history.push("/")

        })
        .catch((err) => {
            setError("We could not sign you up. Did you fill in all fields?")
        })

    }

    return (
        <sc.Page>
            <sc.Title>Hackathon</sc.Title>
            <sc.Form onSubmit={handleSubmission}>
                <sc.FormInputBand>
                    <FormInput name={"username"} onChange={e => setUsername(e.target.value)}/>
                    <FormInput name={"email"} onChange={e => setEmail(e.target.value)}/>                
                </sc.FormInputBand>
                <sc.FormInputBand>
                    <FormInput name={"password"} hidden={true} onChange={e => setPassword(e.target.value)}/>
                    <FormInput name={"confirm password"} hidden={true} onChange={e => setPasswordTwo(e.target.value)}/>                
                </sc.FormInputBand>
                {error && <sc.FormError>{error}</sc.FormError>}
                <sc.submitButton type="submit">
                Register!
                </sc.submitButton>
            </sc.Form>
        </sc.Page>
    )
}
