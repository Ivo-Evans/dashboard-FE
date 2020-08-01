import React from "react";
import xml2js from "xml2js";

export default function useNews(setNews, loggedIn) {
    // N.B. the requirements ask for an image, but it's not in the XML feed. Perhaps the API has changed?
  React.useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://feeds.bbci.co.uk/news/rss.xml#"
    )
      .then((res) => res.text())
      .then((res) => {
        xml2js.parseStringPromise(res)
        .then(res => {
            setNews(res?.rss?.channel[0]?.item[0] || {})
        })
      });
  }, [setNews, loggedIn]);
}
