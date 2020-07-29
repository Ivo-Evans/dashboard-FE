import styled from "styled-components"
import { narrowPage } from "../styles.js"

const FormInputBand = styled.div`
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-width: ${narrowPage};
    @media (max-width: ${narrowPage}) {
    min-width: 0;
    flex-direction: column;
    align-items: center;
  }
`

export default FormInputBand
