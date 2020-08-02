import styled from "styled-components";
import * as styles from "../../variables/styles"
import { Link } from "react-router-dom"

export const CardLink = styled(Link)`
    text-decoration: none;
    color: initial;
`

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid ${styles.yellow};
  overflow: hidden;
  border-radius: 3%;
`;

export const Title = styled.h2`
background-color: ${styles.yellow};
margin: 0;
padding: 1em;
`

export const Contents = styled.div`
opacity: 0.8;
min-height: 10em;
max-height: 10em;
overflow: hidden;
`