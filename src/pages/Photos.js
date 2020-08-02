import React from 'react'
import styled from "styled-components"
import * as sc from "../components/forms/styled-components"
import fetchPhoto from "../utils/fetchPhoto"
import usePhotos from "../hooks/usePhotos"

const PhotoFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

const Photo = styled.img`
  width: auto;
  height: 100%;
`;

export const Photos = ({photos, setPhotos}) => {
    // usePhotos(setPhotos)
    const [file, setFile] = React.useState()
    const handleFile = (event) => {
        // guard clause
        setFile(event.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // guard clause, e.g. you must upload a file
        const formData = new FormData
        formData.append("file", file)
        fetchPhoto(formData)
    }

    return (
        <main>
            <h1>Your Photos</h1>
            <PhotoFlex>
                {photos.map(photo => <Photo src={photo.url} />)}
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
