import React from 'react'
import styled from "styled-components"
import * as sc from "../components/forms/styled-components"
import * as styles from "../variables/styles"
import fetchPhoto from "../utils/fetchPhoto"

import { useHistory} from 'react-router-dom'

const PhotoFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: ${styles.mediumPage};
  margin: 0 auto;
`;

const Photo = styled.img`
  width: auto;
  height: 100%;
  margin: 2em;
`;

export const Photos = ({photos, setPhotos}) => {
    const history = useHistory()
    const [file, setFile] = React.useState()
    const handleFile = (event) => {
        // guard clause
        setFile(event.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // guard clause, e.g. you must upload a file
        const formData = new FormData()
        formData.append("file", file)
        fetchPhoto(formData).then(() => {
            window.location.reload()
        })
    }

    return (
        <main>
            <h1>Your Photos</h1>
            <PhotoFlex>
                {photos.map(photo => <Photo key={photo.url} src={photo.url} />)}
            </PhotoFlex>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFile} />
                <sc.submitButton type="submit">
                Upload image
                </sc.submitButton>
            </form>
        </main>
    )
}
