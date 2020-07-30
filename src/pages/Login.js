import React from 'react'
import FormInput from "../components/forms/FormInput"
import * as sc from "../components/forms/styled-components"
import fetchJSON from "../utils/fetchJSON"
import * as origins from "../variables/origins"
import { useHistory } from "react-router-dom"

export const Login = () => {
    const history = useHistory();
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState("")

    const handleSubmission = (event) => {
        event.preventDefault()
        setError("")
        const formData = {username, password}
        fetchJSON({
            url: origins.backend + "/login",
            method: "POST",
            data: formData,
        })
        .then(res => {
            localStorage.setItem("JWT", res.token)
            history.push("/")

        })
        .catch((err) => {
            setError("We could not log you in. Check your username and password.")
        })

    }

    return (
        <sc.Page>
            <sc.Title>Hackathon</sc.Title>
            <sc.Form onSubmit={handleSubmission}>
                <sc.FormInputBand>
                    <FormInput type="text" name={"username"} value={username} onChange={e => setUsername(e.target.value)}/>
                    <FormInput name={"password"} value={password}  onChange={e => setPassword(e.target.value)} hidden={true}/>                
                </sc.FormInputBand>
                {error && <sc.FormError>{error}</sc.FormError>}
                <sc.submitButton type="submit">
                Log in!
                </sc.submitButton>
            </sc.Form>
            <sc.Text>New to the hackathon? <sc.Link href="/signup">Sign up.</sc.Link></sc.Text>
        </sc.Page>
    )
}
