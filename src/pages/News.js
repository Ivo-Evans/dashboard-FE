import React from "react";
import styled from "styled-components";
import * as styles from "../variables/styles";
import useSpecificArticle from "../hooks/useSpecificArticle";
import useIframeContentHeight from "react-use-iframe-content-height"

const BBCWindow = styled.iframe`
width: ${styles.mediumPage};
min-height: ${"100vh"};
border: none;
`;

const styleSheet = `
<style>
    * {
        max-width: 100%;
    }
    body {
        overflow-x: hidden;
        padding: 2em;
    }
    img {
        height: auto;
        width: 50%;
        display: inline;
        float: right;
        padding-left: 1em;
    }
    figure {
        margin: 0;
    }
</style>
    `;

export const News = ({ news }) => {
  const [article, setArticle] = React.useState("");
  useSpecificArticle(news.link, setArticle);
  const [iframeRef, iframeHeight] = useIframeContentHeight();

  return (
    <BBCWindow
      ref={iframeRef}
      height={iframeHeight}
      scrolling="no"
      srcDoc={`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${news?.title}</title>
                ${styleSheet}
            </head>
            <body>
                <h1>${news?.title}</h1>
                ${article}
            </body>
            </html>`}
    />
  );
};
