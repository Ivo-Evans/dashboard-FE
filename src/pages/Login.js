import React from 'react'
import FormInput from "../components/FormInput"
import FormInputBand from "../components/FormInputBand"
import styled from "styled-components"

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh
`

const Title = styled.h1`
    font-size: 3em;
    margin-bottom: 40px;
`

const Text = styled.p`
    color: #fff;
    font-size: 2em;
`

const Form = styled.form`
    flex-grow: 1;
`

const Link = styled.a`
    color: yellow;
    text-decoration: none;
`

export const Login = () => {
    return (
        <Page>
            <Title>Hackathon</Title>
            <Form>
                <FormInputBand>
                    <FormInput name={"username"}/>
                    <FormInput name={"password"} hidden={true}/>                
                </FormInputBand>
            </Form>
            <Text>New to the hackathon? <Link href="/signup">Sign up.</Link></Text>
        </Page>
    )
}
