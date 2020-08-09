import React from "react";
import * as origins from "../variables/origins";

export default function useSpecificArticle(url, setArticle, loggedIn) {
  const endpoint = "/article/";
  console.log("sending request with ", url)
  React.useEffect(() => {
      if (!url) { return }
    fetch(origins.backend + endpoint + url)
    .then((res) => res.text())
    .then(res => setArticle(res));
  }, [url, setArticle, loggedIn]);
}
